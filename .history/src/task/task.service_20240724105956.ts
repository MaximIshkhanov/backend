import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task) private taskRepository){}


    async createTask(){


    }
    async getAllTask(){

        
    }
}
