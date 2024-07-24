import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { ConfigModule } from "@nestjs/config";
import { Task } from "./task/task.model";


@Module( {
    controllers: [],
    providers: [],
    imports: [
        
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: "127.0.0.1", 
            port: 5432,
            username: "maxish",
            password: "1817",
            database: "TODO",
            models: [Task]
        }),
        TaskModule
    ]
})
export class AppModule {}