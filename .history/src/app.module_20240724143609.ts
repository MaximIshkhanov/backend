import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { Task } from "./task/task.model";


@Module( {
    imports: [
        ConfigModule.forRoot({ 
            envFilePath:'.env'
        }),
        SequelizeModule.forRoot({
                dialect: process.env.DB_DIALECT,
                host: process.env.DB_DIALECTDB_HOST'),
                synchronize:true,
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                port: Number(configService.get('DB_PORT')),
                database: configService.get('DB_NAME'),
                models: [Task]
        }),
        TaskModule,
    ]
})
export class AppModule {}