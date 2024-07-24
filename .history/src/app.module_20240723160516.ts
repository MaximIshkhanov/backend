import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { ConfigModule } from "@nestjs/config";

@Module( {
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath:'.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process,
            port: 5432,
            username: 'maxish',
            password: '1817',
            database: 'TODO',
            models: [],
            autoLoadModels: true
        }),
        TaskModule
    ]
})
export class AppModule {}