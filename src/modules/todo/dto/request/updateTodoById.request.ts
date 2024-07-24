import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateTodoByIdRequestBodyDTO {
    @ApiProperty()
    @IsOptional()
    title: string;

    @ApiProperty()
    @IsOptional()
    completed: boolean;
}

export class UpdateTodoByIdRequestDTO {
    @ApiProperty()
    id: string;
}
