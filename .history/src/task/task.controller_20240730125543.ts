import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskService } from './task.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './task.model';

@ApiTags('Задачи')
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
    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id: number){
        return this.tasksService.deleteOneTask(id);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() taskDto: CreateTasksDto) {
        return this.tasksService.updateTask(Number(id), taskDto);
    }
}
