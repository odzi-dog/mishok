import { TokenType, TokenPayload } from "../../types";
import { jwtConfig } from "../JWTConfig";
import { encryptText } from "../crypto"
import jwt from "jsonwebtoken";

export async function createToken(type: TokenType, payload: TokenPayload): Promise<string> {
    // Encrypting token payload using EncryptText helper
    const encryptedPayload = encryptText(JSON.stringify(payload));

    // Creating jsonwebtoken with token information (such as token type)
    const jwtPayload = {
        type,
        payload: encryptedPayload
    };

    const token = jwt.sign(JSON.stringify(jwtPayload), jwtConfig.secretKey);

    // Returning it
    return token;
};