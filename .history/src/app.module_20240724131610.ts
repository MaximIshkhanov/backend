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
                host: configService.get('DB_HOST'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                port: configService.get('DB_PORT'),
                da: configService.get('DB_DIALECT'),
                dialect: configService.get('DB_DIALECT'),
                dialect: configService.get('DB_DIALECT'),
                
            })
            
        }),
        TaskModule
    ]
})
export class AppModule {}