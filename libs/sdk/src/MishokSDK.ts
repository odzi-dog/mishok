import { ActionType } from "./actions/types";
import { PostsService } from "./services";
import { ServiceOptions } from "./types";

type ActionMappings = Record<ActionType, string>;

// Main Mishok SDK class
export class MishokSDK {
    private readonly url: string;
    private readonly actionMappings: ActionMappings;

    constructor(options: { apiUrl: string, actionMappings: ActionMappings }) {
        this.url = options.apiUrl;
        this.actionMappings = options.actionMappings;
    };

    // Services
    public PostsService = new PostsService(this.getServiceOptions());

    private getServiceOptions(): ServiceOptions {
        return {
            apiUrl: this.url,
            mappings: this.actionMappings,
        };
    };
};