import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({example: 'учить бэк', description: 'задачи'})
    value:string;
}