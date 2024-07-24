import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create.task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task) private taskRepository){}


    async createTask(dto: CreateTaskDto){
        const task = await this.user
    }
    async getAllTask(){

        
    }
}
