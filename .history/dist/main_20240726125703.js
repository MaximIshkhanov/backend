"use strict";
Object.defineProperty(exports, "__esModule", { text: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cors = require("cors");
async function start() {
    const PORT = process.env.PORT || 4000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('TODO list')
        .setDescription('список задач')
        .setVersion('1.0.0')
        .addTag('MaxTodo')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`server start on = ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map