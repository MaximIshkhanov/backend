import { Model } from "sequelize"
import { Table } from "sequelize-typescript"

@Table( {tablename: 'tasks'})
export class Task extends Model<Task, >{
    id: number;
    value: string;
    isComplete: boolean;
}