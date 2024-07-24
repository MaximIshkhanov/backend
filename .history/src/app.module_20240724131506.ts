import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Task } from "./task/task.model";


@Module( {
    imports: [
        ConfigModule.forRoot({ isGlobal:true }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                dialect: configService.get('DB_DIALECT'),
                bootstrap
                bootstrap
            })
            
        }),
        TaskModule
    ]
})
export class AppModule {}