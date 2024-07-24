import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({example: 'учить бэк', description: 'состояние задачи'})
    value:string;
}