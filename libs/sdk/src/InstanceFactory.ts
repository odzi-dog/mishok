import { MishokSDK } from "./MishokSDK";

class MishokSDKFactoryClass {
    private apiUrl: string;

    // Setters
    public withApiUrl(url: string) {
        this.apiUrl = url;
        return this;
    };

    public build(): MishokSDK {
        // Checking if everything is set
        if (this.apiUrl == null) throw new Error("apiUrl is not set");

        // Creating new instance of mishok sdk and returning it
        return new MishokSDK(this.apiUrl);
    };
};

export const MishokSDKFactory = new MishokSDKFactoryClass();