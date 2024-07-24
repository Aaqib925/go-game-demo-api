import { ApiProperty } from '@nestjs/swagger';
import { TodoResponse } from './createTodo.response';

export default class GetAllResponseDTO {
    @ApiProperty({isArray: true, type: TodoResponse})
    data: TodoResponse[];
}

