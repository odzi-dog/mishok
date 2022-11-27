import { createClient } from "edgedb";

// Exporting Provider variables
export const EDGEDB_SERVICE = "EDGEDB_SERVICE";

export const EdgeDBProvider = {
    provide: EDGEDB_SERVICE,
    useValue: createClient(),
};