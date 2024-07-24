import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";


async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const ConfigService = app.get(ConfigService)
    app

    await app.listen(PORT, ()=> console.log(`Server started on port = ${PORT}`))
}

bootstrap()