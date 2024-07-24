import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript"


interface TaskCreationAttrs{
    value:string;
}


@Table( {tableName: 'Tasks'})
export class Task extends Model<Task, TaskCreationAttrs>{

    @ApiProperty({example: '1', description: 'уникальный идентификатор'})
    @Column( {type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'задача1', description: 'задача'})
    @Column( {type: DataType.STRING, unique:true, allowNull: false})
    value: string;

    @Column( {type: DataType.BOOLEAN, defaultValue: false})
    isComplete: boolean;
}