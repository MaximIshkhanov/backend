import { Module } from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {TaskModule} from "./task/task.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Task } from "./task/task.model";


@Module( {
    imports: [
        ConfigModule.forRoot({ isGlobal:true }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                dialect: configService.get('DB_DIALECT'),
                host: configService.get('DB_HOST'),
                autoLoadModels:true,
                synchronize:true,
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                port: Number(configService.get('DB_PORT')),
                database: configService.get('DB_NAME'),
                models: [User,Post,Tag,TagsPosts]
            })
            inject: [ConfigService]
        }),
        TagsPostsModule,
        TagModule,
        UserModule,
        

    ]
})
export class AppModule {}