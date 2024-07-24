import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export default class CreateTodoRequestDTO {
    @ApiProperty()
    @IsNotEmpty()
    title: string;
}
