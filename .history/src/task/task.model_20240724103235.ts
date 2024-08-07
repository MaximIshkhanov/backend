import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript"


interface TaskCreationAttrs{
    value:string;
}


@Table( {tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs>{
    @Column( {type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column( {type: DataType.STRING, unique:true, allowNull: false})
    value: string;
    @Column( {type: DataType.BOOLEAN, defaultValue: false})
    isComplete: boolean;
}