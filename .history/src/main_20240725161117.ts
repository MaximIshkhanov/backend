import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cors from 'cors'

async function start() {
    const PORT = process.env.PORT || 4000;
    const app = await NestFactory.create(AppModule)

    app.use(co)

    const config = new DocumentBuilder()
         .setTitle('TODO list')
         .setDescription('список задач')
         .setVersion('1.0.0')
         .addTag('MaxTodo')
         .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)
    await app.listen(PORT, () => console.log(`server start on = ${PORT}`))
}

start()