import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Task } from "./task/task.model";


@Module( {
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `./${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({

                dialect: configService.get('DB_DIALECT'),
                host: configService.get('POSTGRES_HOST'), 
export class AppModule {}