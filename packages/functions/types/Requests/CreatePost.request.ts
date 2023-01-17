import { PostType } from "@mishok/types";
import { Record as PocketRecord } from "pocketbase";

export interface CreatePostRequest {
    // Post information
    type: PostType,
    title?: string,
    tags?: Array<string>,

    // PostType-related data
    text?: Record<string, unknown>,
    videos?: Array<Record<string, unknown>>,
    images?: Array<{ url: string }>,
};

export interface CreatePostResponse {
    isCreated: boolean,
    record: PocketRecord
};