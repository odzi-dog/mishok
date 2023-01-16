import { Context, IncomingBody, StructuredReturn } from "faas-js-runtime";

export function handle(context: Context, body: IncomingBody): StructuredReturn {
    // Hard-coded action <-> route mapping
    // todo
    // not f*cking hard-code this??? somehow???
    const mapping = {
        "root::generate_token": "https://generate-token.mishok.func.odzi.dog",
        "scrapper::create_post": "https://create-post.mishok.func.odzi.dog",
    };

    // Returning response
    return {
        body: mapping,
    };
};