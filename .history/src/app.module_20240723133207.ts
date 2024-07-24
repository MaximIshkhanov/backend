import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module( {
    controllers: [AppController],
    providers: [AppService],
    imports: {
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'loca'
        })
    }
})
export class AppModule {}