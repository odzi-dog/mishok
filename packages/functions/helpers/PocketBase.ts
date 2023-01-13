import PocketBase from "pocketbase";

export function getClient() {
    // todo
    // create env variable API_URL and use it here instead
    // of hard-coding it
    return new PocketBase("https://apis.odzi.dog/mishok/v1");
};