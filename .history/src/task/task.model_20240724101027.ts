import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table( {tableName: 'tasks'})
export class Task extends Model<Task, >{
    @Column( {type: DataType.INTEGER, unique:true, autoIncrement: true})
    id: number;
    @Column( {type: DataType.STRING, unique:true, autoIncrement: true})
    value: string;
    @Column( {type: DataType.INTEGER, def})
    isComplete: boolean;
}