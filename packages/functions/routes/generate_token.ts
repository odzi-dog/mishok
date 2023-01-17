import { Context, IncomingBody, StructuredReturn } from "faas-js-runtime";
import { TokenPayload, TokenType } from "@mishok/types";
import { ErrorResponse, getClient } from "../helpers";
import { Schema } from "jsonschema";
import * as jwt from "jsonwebtoken";
import { jwtConfig } from "../helpers/JWTConfig";
import { SchemaValidator } from "../helpers/SchemaValidator";
import { createToken } from "../helpers/tokens/CreateToken";

// Body Schema
const bodySchema: Schema = {
    type: "object",
    properties: {
        type: {
            type: "string",
            enum: Object.values(TokenType)
        },

        // Payload information
        payload: {
            type: "object",
            required: true
        }
    }
};

interface Body {
    type: TokenType,
    payload: TokenPayload
};

export async function handle(context: Context, body: Body): Promise<StructuredReturn> {
    const client = getClient();

    // Verifying and decoding authorization token using jwt
    let adminToken = context.headers.authorization;
    if (!adminToken) return new ErrorResponse("Invalid admin token").toStructuredResponse();

    adminToken = adminToken.replace("Bearer ", "");

    // > Verifying
    if (!jwt.verify(adminToken, jwtConfig.secretKey)) return new ErrorResponse("Could not verify provided token information").toStructuredResponse();
    
    const decodedToken = jwt.decode(adminToken) as { email: string, password: string };
    if (decodedToken.email == null || decodedToken.password == null) return new ErrorResponse("Invalid admin token").toStructuredResponse();

    // Validating body using schema
    if (SchemaValidator.validate(body, bodySchema).valid == false) return new ErrorResponse("Invalid payload").toStructuredResponse();

    // Authorizing this admin and then checking authorization
    await client.admins.authWithPassword(decodedToken.email, decodedToken.password);
    if (!client.authStore.isValid) return new ErrorResponse("Invalid admin credentials").toStructuredResponse();

    // Creating new token with this payload
    const createdToken = await createToken(body.type, body.payload);

    return {
        statusCode: 200,
        body: {
            token: createdToken
        
            // todo
            // Other token information? Such as Issued At or Expire
        },
    };
};