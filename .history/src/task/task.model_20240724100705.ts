import { Model } from "sequelize"
import { Column, Table } from "sequelize-typescript"

@Table( {tablename: 'tasks'})
export class Task extends Model<Task, >{
    @Column( {type: DataType.INTEGER, un})
    id: number;
    value: string;
    isComplete: boolean;
}