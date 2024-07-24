import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({example: 'true', description: 'состояние задачи'})
    value:string;
}