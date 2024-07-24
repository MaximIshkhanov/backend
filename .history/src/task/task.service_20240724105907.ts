import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

    constructor(@Injectable(Task) private taskRepo){}


    async createTask(){


    }
    async getAllTask(){

        
    }
}
