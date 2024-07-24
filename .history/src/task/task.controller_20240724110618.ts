import {Body, Controller, } from '@nestjs/common';

@Controller('task')
export class TaskController {

    @Post()
    create(@Body)
}
