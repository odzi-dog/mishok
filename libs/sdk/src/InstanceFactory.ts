import { ActionType } from "./actions/types";
import { axios } from "./AxiosInstance";
import { MishokSDK } from "./MishokSDK";

export class MishokSDKFactory {
    private apiUrl: string;
    private routeMappingsUrl = "https://get-routes-mapping.mishok.func.odzi.dog";
    
    // Setters
    public withApiUrl(url: string) {
        this.apiUrl = url;
        return this;
    };

    public withRouteMappingsUrl(url: string) {
        this.routeMappingsUrl = url;
        return this;
    };

    public async build(): Promise<MishokSDK> {
        // Checking if everything is set
        if (!!this.apiUrl || !!this.routeMappingsUrl) throw new Error("apiUrl or routeMappingsUrl is not set");

        // Getting route mappings from this.routeMappingsUrl
        const { data: mappings } = await axios.get<Record<string, string>>(this.routeMappingsUrl);

        // Checking them
        if (!this.isMappingsCorrect(mappings)) throw new Error("Invalid route mappings received");

        // Creating new instance of mishok sdk and returning it
        return new MishokSDK({
            apiUrl: this.apiUrl,
            actionMappings: mappings as Record<ActionType, string>,
        });
    };

    // Helper functions
    private isMappingsCorrect(mappings: Record<string, string>): boolean {
        return true;
    };
};