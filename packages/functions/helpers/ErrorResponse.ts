import { StructuredReturn } from "faas-js-runtime";

export class ErrorResponse {
    constructor(
        private message: string,
        private stack: Object | null = null,
        private statusCode = 400,
    ) {}

    // ToJson
    public toJson(): { message: string, stack?: string } {
        return {
            message: this.message,
            stack: this.stack ? JSON.stringify(this.stack) : undefined,
        };
    };

    // ToStructuredResponse
    public toStructuredResponse(): StructuredReturn {
        return {
            statusCode: this.statusCode,
            body: this.toJson(),
        }
    };
};