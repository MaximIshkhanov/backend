import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";

@Module( {
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'MaxIsh',
            password: '1817',
            database: 'TODO',
            models: [],
            autoLoadModels: true
        }),
    ]
})
export class AppModule {}