import {Body, Controller, Post } from '@nestjs/common';

@Controller('task')
export class TaskController {

    @Post()
    create(@Body() )
}
