import { ApiController, Authorized, CurrentUser, Delete, Get, Patch, Post } from 'core/decorators';
import TodoService from './todo.service';
import { Body, Param } from '@nestjs/common';
import CreateTodoRequestDTO from './dto/request/createTodo.request';
import { User } from '@prisma/client';
import CreateTodoResponseDTO from './dto/response/createTodo.response';
import GetAllResponseDTO from './dto/response/getAllTodos.response';
import { GetTodoByIdRequestDTO } from './dto/request/getTodoById.request';
import GetTodoByIdResponseDTO from './dto/response/getTodoById.response';
import { UpdateTodoByIdRequestBodyDTO, UpdateTodoByIdRequestDTO } from './dto/request/updateTodoById.request';
import UpdateTodoByIdResponseDTO from './dto/response/updateTodoById.response';
import DeleteTodoByIdResponseDTO from './dto/response/deleteTodoById.response';

@ApiController({ version: '1', tag: 'todo', path: '/todo' })
export default class TodoController {
    constructor(
        private _todoService: TodoService,
    ) { }

    @Authorized()
    @Post({
        path: '/',
        description: 'Create Todo',
        response: CreateTodoResponseDTO,
    })
    CreateTodo(
        @Body() data: CreateTodoRequestDTO,
        @CurrentUser() user: User
    ): Promise<CreateTodoResponseDTO> {
        return this._todoService.CreateTodo(data, user);
    }

    @Authorized()
    @Get({
        path: '/all',
        description: 'Get all Todos',
        response: GetAllResponseDTO,
    })
    async GetAllTodos(@CurrentUser() user: User): Promise<GetAllResponseDTO> {
        return this._todoService.GetAllTodos(user);
    }

    @Authorized()
    @Get({
        path: '/:id',
        description: 'Get Todo by ID',
        response: GetTodoByIdResponseDTO,
    })
    GetTodoById(
        @Param() body: GetTodoByIdRequestDTO,
        @CurrentUser() user: User,
    ): Promise<GetTodoByIdResponseDTO> {
        return this._todoService.GetTodoById(body, user);
    }

    @Authorized()
    @Patch({
        path: '/:id',
        description: 'Update todo by id',
        response: UpdateTodoByIdResponseDTO,
    })
    UpdateTodoById(
        @Param() body: UpdateTodoByIdRequestDTO,
        @Body() updateProject: UpdateTodoByIdRequestBodyDTO,
        @CurrentUser() user: User,
    ): Promise<UpdateTodoByIdResponseDTO> {
        return this._todoService.UpdateTodoById(body, updateProject, user);
    }

    @Authorized()
    @Delete({
        path: '/:id',
        description: 'Delete todo by id',
        response: DeleteTodoByIdResponseDTO,
    })
    DeleteTodoById(
        @Param() body: UpdateTodoByIdRequestDTO,
        @CurrentUser() user: User,
    ): Promise<any> {
        return this._todoService.DeleteTodoById(body, user);
    }
}
