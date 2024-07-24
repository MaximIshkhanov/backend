import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    imports: [
        S
    ]
})
export class TaskModule {}
