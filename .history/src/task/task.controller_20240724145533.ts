import {Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private tasksService: TaskService){}

    
    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.createTask(taskDto)
    }
    @Get()
    gerAll(){
        return this.tasksService.getAllTasks();
    }
}
