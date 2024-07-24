import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";


async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const ConfigService = app.get(ConfigService)
    app.enableCors({
        origin: [ConfigService.get('FRONT_URL')]
    })

    await app.listen(ConfigService.get))
}

bootstrap()