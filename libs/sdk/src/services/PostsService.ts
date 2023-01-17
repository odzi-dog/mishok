import { CreatePost } from "../actions";
import { BaseService } from "./BaseService";

export class PostsService extends BaseService {
    // CreatePost Method
    public createPost(payload: typeof CreatePost["payload"]): typeof CreatePost["response"] {
        return CreatePost.handle(this._getActionOptions(), payload);
    };
};