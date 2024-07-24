import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Task } from "./task/task.model";


@Module( {
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({

                dialect: configService.get('DB_DIALECT'),
                host: configService.get('POSTGRES_HOST'), 
                autoLoadModels: true,
                synchronize: true,
                port: Number(process.env.POSTGRES_PORT),
                username: configService.get('POSTGRES_USER'),
                password: (process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                models: [Task]
            })
                        
        }),
        TaskModule
    ]
})
export class AppModule {}