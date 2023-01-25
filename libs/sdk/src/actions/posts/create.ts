import { AxiosResponse } from "axios";
import { axios } from "../../AxiosInstance";
import { Action, ActionOptions } from "../../types";
import { CreatePostRequest } from "@mishok/functions";
import { V1Mappings } from "../../mappings/v1";

// Implementation
class ActionClass extends Action<CreatePostRequest, Promise<AxiosResponse>> {
    // Implementation
    public async handle({ apiUrl }: ActionOptions, payload: CreatePostRequest): Promise<AxiosResponse> {
        // Getting route
        const route = apiUrl + V1Mappings["create_post"];

        // Making request to this route, handling errors and returning
        // response
        return await axios.post(route, payload);
    };
};

export const CreatePost = new ActionClass();