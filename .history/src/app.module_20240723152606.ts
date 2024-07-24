import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task/task.module";

@Module( {
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 3306,
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