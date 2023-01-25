import type PocketBase from "pocketbase";
import { jwtConfig } from "../JWTConfig";
import * as jwt from "jsonwebtoken";
import { AuthTokenPayload, TokenType } from "@mishok/types";
import { decryptText } from "../crypto";

export async function authorizeToken(client: PocketBase, jwtToken: string): Promise<{ isAuthorized: boolean, auth: AuthTokenPayload }> {
    // Verifying token
    if (!jwt.verify(jwtToken, jwtConfig.secretKey)) throw new Error("Invalid token");
    
    // Decoding this token using jsonwebtoken
    const token = jwt.decode(jwtToken) as { type: TokenType, payload: string };

    // Checking token type
    if (token.type != TokenType.AUTH) throw new Error("Invalid token");

    // Decrypting payload of this token 
    const decrypted = JSON.parse(decryptText(token.payload)) as AuthTokenPayload;

    // Authorizing user
    await client.collection(decrypted.collection).authWithPassword(decrypted.username, decrypted.password);

    // Returning response
    return {
        isAuthorized: client.authStore.isValid,
        auth: decrypted,
    }
};