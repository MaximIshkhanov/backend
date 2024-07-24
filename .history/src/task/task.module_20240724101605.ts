import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [
        SequelizeModule.
    ]
})
export class TaskModule {}
