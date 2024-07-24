import { ApiProperty } from "@nestjs/swagger";
import { TodoResponse } from "./createTodo.response";

export default class UpdateTodoByIdResponseDTO {
    @ApiProperty()
    data: TodoResponse;
}