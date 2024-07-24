import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

    constructor(@Injectable(Task) private task){}


    async createTask(){


    }
    async getAllTask(){

        
    }
}
