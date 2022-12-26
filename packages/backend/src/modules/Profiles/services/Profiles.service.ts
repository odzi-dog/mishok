import { Inject, Injectable } from "@nestjs/common";
import { Client } from "edgedb";
import { EDGEDB_SERVICE } from "../../EdgeDB/provider.const";

@Injectable()
export class ProfilesService {
    constructor(
        @Inject(EDGEDB_SERVICE)
        private readonly database: Client,
    ) {}

    // Fetch by id
    async fetchById(id: string): Promise<any> {
        
    };

    // Fetch by username
};