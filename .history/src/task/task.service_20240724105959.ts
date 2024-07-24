import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Tas) private taskRepository){}


    async createTask(){


    }
    async getAllTask(){

        
    }
}
