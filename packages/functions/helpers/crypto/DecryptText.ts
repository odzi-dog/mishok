import { CryptrInstance } from "../Cryptr"

export function decryptText(hash: string): string {
    return CryptrInstance.decrypt(hash);
};