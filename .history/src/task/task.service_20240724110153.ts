import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task) private taskRepository){}


    async createTask(CreateTaskDto){


    }
    async getAllTask(){

        
    }
}
