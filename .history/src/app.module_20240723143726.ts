import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";

@Module( {
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 3,
            username: 'maxish',
            password: '1817',
            database: 'TODO',
            models: [],
            autoLoadModels: true
        }),
    ]
})
export class AppModule {}