import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

    constructor(@Injectable(Task) private taskRe){}


    async createTask(){


    }
    async getAllTask(){

        
    }
}
