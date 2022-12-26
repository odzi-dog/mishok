import { CreateRequest, FetchOneRequest, Profile, ProfilesController, ProfilesControllerMethods } from "packages/generated/typescript/v1/profiles";
import { Controller } from "@nestjs/common";
import { ProfilesService } from "../services";

@Controller()
@ProfilesControllerMethods()
export class ProfilesServiceController implements ProfilesController {
    constructor(
        private readonly profilesService: ProfilesService,
    ) {}

    async fetchOne(request: FetchOneRequest): Promise<Profile> {
        // Trying to fetch profile using either it's id or it's username

        return {
            id: "0",
            username: "dogleash",
            devices: [],
            liked: [],
            tags: [],
        }
    };

    async create(request: CreateRequest): Promise<Profile> {
        // Creating new profile
        
        // And then returning it
        return {
            id: "0",
            username: "dogleash",
            devices: [],
            liked: [],
            tags: [],
        }
    };
};