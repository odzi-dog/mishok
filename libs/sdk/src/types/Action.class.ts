import { ActionOptions } from "./ActionOptions";

export class Action<Body, Response> {
    // Typings
    payload: Body;
    response: Response;
    
    // from ActionDefinition
    mapping: string;
    
    // Implementation-related
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public handle(sdk: ActionOptions, payload: Body): Response {
        return;
    };
};