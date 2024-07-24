import { Module } from '@nestjs/common';
import DatabaseModule from './../../database/database.module';
import UserModule from './../app/user/user.module';
import TodoService from './todo.service';
import TodoController from './todo.controller';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [TodoController],
    providers: [TodoService],
    exports: [TodoService],
})
export default class TodoModule { }