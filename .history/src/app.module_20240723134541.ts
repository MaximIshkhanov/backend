import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module( {
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeMod.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'maxish',
        password: '1817',
        database: 'TODO',
        models: [],
        autoLoadModels: true
    }),]
})
export class AppModule {}