import {Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private tasksServise: TaskService){
        super(props)
    }

    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this
    }
}
