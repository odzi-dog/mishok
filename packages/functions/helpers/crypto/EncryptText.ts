import { CryptrInstance } from "../Cryptr";

export function encryptText(content: string): string {
  return CryptrInstance.encrypt(content);
};