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
                dialect: 'postgres',
                host: process.env.DB_HOST,
                synchronize:true,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                port: Number(process.env.DB_PORT),
                database: process.env.DB_NAME,
                models: [Task]
        }),
        TaskModule,
    ]
})
export class AppModule {}