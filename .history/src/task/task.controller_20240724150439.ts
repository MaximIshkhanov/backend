import {Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskService } from './task.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Task } from './task.model';

@Api
@Controller('task')
export class TaskController {

    constructor(private tasksService: TaskService){}

    @ApiOperation({summary:'create task'})
    @ApiResponse({status: 200, type: Task})
    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.createTask(taskDto)
    }

    @ApiOperation({summary:'get all tasks'})
    @ApiResponse({status: 200, type: [Task]})
    @Get()
    gerAll(){
        return this.tasksService.getAllTasks();
    }
}
