import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({example: 'чит', description: 'состояние задачи'})
    value:string;
}