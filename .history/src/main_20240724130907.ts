import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const ConfigService = app.get()

    await app.listen(PORT, ()=> console.log(`Server started on port = ${PORT}`))
}

bootstrap()