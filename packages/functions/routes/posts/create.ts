import { Context, StructuredReturn } from "faas-js-runtime";
import { getClient } from "../../helpers/PocketBase";
import { Schema } from "jsonschema";
import { authorizeToken } from "../../helpers/authorization/AuthorizeToken";
import { PostStatus, PostType } from "@mishok/types";
import { ErrorResponse, SchemaValidator } from "../../helpers";
import { Record, ClientResponseError } from "pocketbase";
import { CreatePostRequest } from "packages/functions/types";

// Body schema
const bodySchema: Schema = {
    type: "object",
    properties: {
        // Post information
        type: {
            type: "string",
            enum: Object.values(PostType),
        },
        title: {
            type: "string"
        },
        tags: {
            type: "array",
            items: {
                type: "string"
            }
        },

        // PostType-related data
        text: {
            type: "object"
        },
        videos: {
            type: "array",
            items: {
                type: "object",
            },
            maxItems: 5
        },
        images: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    url: {
                        type: "string",
                    }
                },
                required: [ "url" ]
            },
            maxItems: 15
        }
    },
    required: [ "type" ]
};

export async function handle(context: Context, body: CreatePostRequest): Promise<StructuredReturn> {
    // Creating Pocketbase API Client
    const client = getClient();
    
    // Checking user authorization
    if (!context.headers.authorization) return new ErrorResponse("Invalid token").toStructuredResponse();
    const token = context.headers.authorization.replace("Bearer ", "");

    if ((await authorizeToken(client, token)).isAuthorized == false) return new ErrorResponse("Invalid token").toStructuredResponse();

    // Validating body using json-schema
    if (SchemaValidator.validate(body, bodySchema).valid == false) return new ErrorResponse("Invalid body payload").toStructuredResponse();

    // Checking provided post data with post type
    switch (body.type) {
        case PostType.TEXT:
            if (body.text == null) {
                return new ErrorResponse("No text provided for PostType.TEXT").toStructuredResponse();
            };
            break;
        
        case PostType.VIDEO:
            if (body.videos == null || body.videos.length == 0) {
                return new ErrorResponse("No videos provided for PostType.VIDEO").toStructuredResponse();  
            };
            break;

        case PostType.IMAGE:
            if (body.images == null || body.images.length == 0) {
                return new ErrorResponse("No images provided for PostType.IMAGE").toStructuredResponse();
            };
            break;
    }

    // Adding new post to posts collection
    let record: Record;
    try {
        record = await client.collection("posts").create({
            type: body.type,
            status: PostStatus.NEW,
            title: body.title,
            tags: body.tags ?? [],
            isAutoTagged: true,
            createdBy: client.authStore.model?.id,
            text: body.text,
            images: body.images,
            videos: body.videos,
        });
    } catch(error) {
        if (error instanceof ClientResponseError) {
            return new ErrorResponse(error.message, error.data).toStructuredResponse();
        };

        return new ErrorResponse("Unknown error while creating new post").toStructuredResponse();
    };

    // Returning response
    return {
        statusCode: 200,
        body: {
            isCreated: true,
            record
        },
    }
};