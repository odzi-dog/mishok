import { AuthMappings } from "./Auth.mappings";
import { PostsMappings } from "./Posts.mappings";

export const V1Mappings = {
    ...PostsMappings,
    ...AuthMappings
};