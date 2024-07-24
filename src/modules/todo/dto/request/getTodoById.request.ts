import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetTodoByIdRequestDTO {
    @ApiProperty()
    @IsString()
    id: string;
}