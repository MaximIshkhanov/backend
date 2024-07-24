import { NestFactory } from "@nestjs/core";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create()

    await app.listen(POST, ()=> console.log('Server started on port = ${PORT}'))
}

start()