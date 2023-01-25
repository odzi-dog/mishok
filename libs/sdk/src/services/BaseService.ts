import { ActionOptions, ServiceOptions } from "../types";

export class BaseService {
    constructor(
        private readonly options: ServiceOptions
    ) {};

    public _getActionOptions(): ActionOptions {
        return {
            apiUrl: this.options.apiUrl,
        };
    };
};