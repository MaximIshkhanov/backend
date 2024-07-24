import { Model } from "sequelize"
import { Table } from "sequelize-typescript"

@Table( {tablename: 'tasks'})
export class Task extends Model<Task, >{
    @c
    id: number;
    value: string;
    isComplete: boolean;
}