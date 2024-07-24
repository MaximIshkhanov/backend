import { Model } from "sequelize"
import { Column, Table } from "sequelize-typescript"

@Table( {tablename: 'tasks'})
export class Task extends Model<Task, >{
    @Column( {Type: DataType.})
    id: number;
    value: string;
    isComplete: boolean;
}