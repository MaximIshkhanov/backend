import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { Task } from "./task/task.model";

@Module( {
    controllers: [],
    providers: [],
    imports: [
        
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST, 
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: 'nest-course',
            database: 'nest-course',
            models: [Task]
        }),
        TaskModule
    ]
})
export class AppModule {}