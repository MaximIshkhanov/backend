import {Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';

@Controller('task')
export class TaskController {

    constructor(props){
        super
    }

    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this
    }
}
