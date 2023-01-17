import { ActionType } from "../actions/types";

export interface ActionOptions {
    apiUrl: string;
    mappings: Record<ActionType, string>;
};