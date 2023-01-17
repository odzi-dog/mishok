import { Identifier } from "../Identifier.type";
import { PostStatus } from "./PostStatus.enum";
import { PostType } from "./PostType.enum";

export interface Post {
    type: PostType,
    status: PostStatus,
    title?: string,
    tags: Array<Identifier>,
    isAutoTagged?: boolean,
    createdBy: Identifier,
    
    // PostType-related
    text?: Record<string, unknown>,
    viderUrls?: Record<string, unknown>,
};