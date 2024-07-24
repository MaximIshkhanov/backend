import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module( {
    controllers: [AppController],
    providers: [App]
})
export class AppModule {}