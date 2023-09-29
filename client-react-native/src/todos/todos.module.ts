import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([todo])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
