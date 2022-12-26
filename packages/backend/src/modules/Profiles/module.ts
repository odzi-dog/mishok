import { Module } from "@nestjs/common";
import { EdgeDBModule } from "../EdgeDB/module";

import * as Controllers from './controllers';
import * as Services from './services';

@Module({
    imports: [EdgeDBModule],
    controllers: [...Object.values(Controllers)],
    providers: [...Object.values(Services)],
    exports: [...Object.values(Services)],
})
export class ProfilesModule {}