import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


async function bootstrap() {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)
    await app.listen(configService.get('PORT'))
    console.log('server start on: ', configService.get('PORT'))
}

bootstrap()