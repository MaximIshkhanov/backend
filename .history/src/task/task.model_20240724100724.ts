import { Model } from "sequelize"
import { Column, Table } from "sequelize-typescript"

@Table( {tablename: 'tasks'})
export class Task extends Model<Task, >{
    @Column( {type: DataType.INTEGER, unique:true, autoIncrement: true , })
    id: number;
    value: string;
    isComplete: boolean;
}