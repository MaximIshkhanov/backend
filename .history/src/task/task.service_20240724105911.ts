import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

    constructor(@Injectable(Task) private taskRepository){}


    async createTask(){


    }
    async getAllTask(){

        
    }
}