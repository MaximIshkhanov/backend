import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({example: 'учить бэк', description: 'задача'})
    te:string;
}