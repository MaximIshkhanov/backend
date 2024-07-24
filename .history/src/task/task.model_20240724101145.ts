import { Column, DataType, Model, Table } from "sequelize-typescript"
import { defaultValueSchemable } from "sequelize/types/utils";

@Table( {tableName: 'tasks'})
export class Task extends Model<Task, >{
    @Column( {type: DataType.INTEGER, unique:true, autoIncrement: true})
    id: number;
    @Column( {type: DataType.STRING, unique:true, allowN})
    value: string;
    @Column( {type: DataType.BOOLEAN, defaultValue: false})
    isComplete: boolean;
}