import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    import {  } from "module";
})
export class TaskModule {}
