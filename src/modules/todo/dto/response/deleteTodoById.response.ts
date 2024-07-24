import { ApiProperty } from "@nestjs/swagger";
import { TodoResponse } from "./createTodo.response";

export default class DeleteTodoByIdResponseDTO {
    @ApiProperty()
    message: string;
}