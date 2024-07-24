import { ApiProperty } from "@nestjs/swagger";
import { TodoResponse } from "./createTodo.response";

export default class GetTodoByIdResponseDTO {
    @ApiProperty()
    data: TodoResponse;
}