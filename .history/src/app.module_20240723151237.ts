import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";0
import { Module } from '@nestjs/common';

@Module( {
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
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