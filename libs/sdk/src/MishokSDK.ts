import { PostsService } from "./services";
import { ServiceOptions } from "./types";

// Main Mishok SDK class
export class MishokSDK {
    constructor(
        private readonly apiUrl: string,
    ) {};

    // Services
    public PostsService = new PostsService(this.getServiceOptions());

    private getServiceOptions(): ServiceOptions {
        return {
            apiUrl: this.apiUrl,
        };
    };
};