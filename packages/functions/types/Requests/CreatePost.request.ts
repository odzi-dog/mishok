import { PostType } from "@mishok/types";
import { Record as PocketRecord } from "pocketbase";

// BasePayload
interface BasePayload {
    type: PostType,
    title?: string,
    tags?: Array<string>,
}

// TextType
interface TextTypePayload extends BasePayload {
    type: PostType.TEXT,
    text: Record<string, unknown>,
};

// VideoType
interface VideoTypePayload extends BasePayload {
    type: PostType.VIDEO,
    videos: Array<Record<string, unknown>>,
};

// ImageType
interface ImageTypePayload extends BasePayload {
    type: PostType.IMAGE,
    images: Array<{ url: string }>,
};

export type CreatePostRequest = TextTypePayload | VideoTypePayload | ImageTypePayload;

export interface CreatePostResponse {
    isCreated: boolean,
    record: PocketRecord
};