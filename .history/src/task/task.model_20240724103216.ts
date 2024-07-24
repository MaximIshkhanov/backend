import { Column, DataType, Model, Table } from "sequelize-typescript"


interface TaskCreationAttrs{
    value:string;
}


@Table( {tableName: 'tasks'})
export class Task extends Model<Task, TaskCreationAttrs>{
    @Column( {type: DataType.INTEGER, unique:true, autoIncrement: true, pr})
    id: number;
    @Column( {type: DataType.STRING, unique:true, allowNull: false})
    value: string;
    @Column( {type: DataType.BOOLEAN, defaultValue: false})
    isComplete: boolean;
}