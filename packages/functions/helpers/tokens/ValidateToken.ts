import { TokenPayload, TokenType } from "../../types";

// Possible response interfaces
interface ValidTokenResponse {
    isValid: true;
    type: TokenType;
    payload?: TokenPayload;
};

interface InvalidTokenResponse {
    isValid: false;
};

// Function itself
export async function validateToken(token: string): Promise<ValidTokenResponse | InvalidTokenResponse> {
    return {
        isValid: false
    }
};