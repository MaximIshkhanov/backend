import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create.task.dto';

@Injectable()
export class TaskService {

    deleteTask(id: number) {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectModel(Task) private taskRepository: typeof Task){}


    async createTask(dto: CreateTaskDto){
        console.log(dto);
        const task = await this.taskRepository.create(dto);
        return task;
    }
    async getAllTasks(){
        const tasks = await this.taskRepository.findAll();
        return tasks;
        
    }
    async deleteOneTask(id: number){
        const task = await this.taskRepository.destroy({where:{id}});
        return task;
    }
    async updateTask(id: number, dto: UpdateTasksDto){
        const task = await this.taskRepository.update(dto, {where: {id}});
        return task;
    }
}
