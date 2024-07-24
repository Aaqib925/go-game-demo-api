import { Injectable } from '@nestjs/common';
import CreateTodoRequestDTO from './dto/request/createTodo.request';
import DatabaseService from 'database/database.service';
import { User } from '@prisma/client';
import CreateTodoResponseDTO from './dto/response/createTodo.response';
import GetAllResponseDTO from './dto/response/getAllTodos.response';
import { BadRequestException } from 'core/exceptions/response.exception';
import GetTodoByIdResponseDTO from './dto/response/getTodoById.response';
import { UpdateTodoByIdRequestBodyDTO, UpdateTodoByIdRequestDTO } from './dto/request/updateTodoById.request';
import UpdateTodoByIdResponseDTO from './dto/response/updateTodoById.response';
import DeleteTodoByIdResponseDTO from './dto/response/deleteTodoById.response';

@Injectable()
export default class TodoService {
    constructor(
        private _databaseService: DatabaseService,
    ) { }

    async CreateTodo(data: CreateTodoRequestDTO, user: User): Promise<CreateTodoResponseDTO> {
        const userExist = await this._databaseService.user.findFirst({
            where: { id: user.id },
        });

        if (!userExist) {
            throw new Error('User not found');
        }

        const todo = await this._databaseService.todo.create({
            data: {
                title: data.title,
                userId: user.id,
            },
            select: {
                title: true,
                id: true,
                completed: true,
            }
        });

        return { data: todo };

    }

    async GetAllTodos(user: User): Promise<GetAllResponseDTO> {
        const userExist = await this._databaseService.user.findFirst({
            where: { id: user.id },
        });

        if (!userExist) {
            throw new Error('User not found');
        }

        const todos = await this._databaseService.todo.findMany({
            where: { userId: user.id },
            select: {
                title: true,
                id: true,
                completed: true,
            }
        });

        return { data: todos };
    }

    async GetTodoById(body: { id: string }, user: User): Promise<GetTodoByIdResponseDTO> {
        const userExist = await this._databaseService.user.findFirst({
            where: { id: user.id },
        });

        if (!userExist) {
            throw new BadRequestException('User not found');
        }

        const todo = await this._databaseService.todo.findFirst({
            where: { id: body.id, userId: user.id },
            select: {
                title: true,
                id: true,
                completed: true,
            }
        });

        if (!todo) {
            throw new BadRequestException('Todo not found');
        }

        return { data: todo };
    }

    async UpdateTodoById(body: UpdateTodoByIdRequestDTO, updateProject: UpdateTodoByIdRequestBodyDTO, user: User): Promise<UpdateTodoByIdResponseDTO> {
        const userExist = await this._databaseService.user.findFirst({
            where: { id: user.id },
        });

        if (!userExist) {
            throw new BadRequestException('User not found');
        }

        const todo = await this._databaseService.todo.findFirst({
            where: { id: body.id, userId: user.id },
        });

        if (!todo) {
            throw new BadRequestException('Todo not found');
        }

        const updatedTodo = await this._databaseService.todo.update({
            where: { id: todo.id },
            data: {
                title: updateProject.title && updateProject.title,
                completed: updateProject.completed && updateProject.completed,
            },
        });

        if (!updatedTodo) {
            throw new BadRequestException('Error updating todo');
        }

        const updatedTodoResponse = await this._databaseService.todo.findFirst({
            where: { id: todo.id },
            select: {
                title: true,
                id: true,
                completed: true,
            }
        });

        return { data: updatedTodoResponse };
    }

    async DeleteTodoById(body: UpdateTodoByIdRequestDTO, user: User): Promise<DeleteTodoByIdResponseDTO> {
        const userExist = await this._databaseService.user.findFirst({
            where: { id: user.id },
        });

        if (!userExist) {
            throw new BadRequestException('User not found');
        }

        const todo = await this._databaseService.todo.findFirst({
            where: { id: body.id, userId: user.id },
        });

        if (!todo) {
            throw new BadRequestException('Todo not found');
        }

        await this._databaseService.todo.delete({
            where: { id: todo.id },
        });

        return { message: 'Todo deleted successfully' };
    }

}
