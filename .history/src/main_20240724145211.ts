import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder } from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 4000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
         .setTitle('TODO list')
         .setDescription('список задач')
         .setVersion('')

    await app.listen(PORT, () => console.log(`server start on = ${PORT}`))
}

start()