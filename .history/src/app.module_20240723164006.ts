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
            host: process.env.POSTGRES_HOST, 
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: 1(process.env.POSTGRESS_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [],
            autoLoadModels: true
        }),
        TaskModule
    ]
})
export class AppModule {}