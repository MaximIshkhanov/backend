import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)
    await app.listen(configService.get('3000'))
    console.log('server start on: ', configService.get(3000))
}

bootstrap()