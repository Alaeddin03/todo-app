import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { read } from 'fs';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {

  constructor(
    @InjectRepository(todo)
    private readonly todoRepository: Repository<todo>,
  ) {}

  create(createTodoDto: CreateTodoDto): Promise<todo> {
    const newTodo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(newTodo);
  }

  findAll(): Promise<todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: number): Promise<todo> {
    return this.todoRepository.findOneBy({id: id});
  }
  
  update(id: number, updateTodoDto: UpdateTodoDto): Promise<todo> {
    return this.todoRepository.save({id, ...updateTodoDto});
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }

}
