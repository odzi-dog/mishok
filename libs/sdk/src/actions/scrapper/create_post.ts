import { AxiosResponse } from "axios";
import { axios } from "../../AxiosInstance";
import { Action, ActionOptions } from "../../types";
import { CreatePostRequest } from "@mishok/functions";

// Implementation
class ActionClass extends Action<CreatePostRequest, Promise<AxiosResponse>> {
    // Action information
    public mapping = "scrapper::create_post";

    // Implementation
    public async handle({ mappings }: ActionOptions, payload: CreatePostRequest): Promise<AxiosResponse> {
        // Getting route
        const route = mappings["CreatePost"];

        // Making request to this route, handling errors and returning
        // response
        return await axios.post(route, payload);
    };
};

export const CreatePost = new ActionClass();