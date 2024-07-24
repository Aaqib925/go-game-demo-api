import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class TodoResponse {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    title: string;
    
    @ApiProperty()
    completed: boolean;
   
}

export default class CreateTodoResponseDTO {
    @ApiProperty()
    data: TodoResponse;
}

