import { Injectable } from '@nestjs/common';
import { TaskDto, CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [];

  findAll(): TaskDto[] {
    return this.tasks;
  }

  create(dto: CreateTaskDto): TaskDto {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      ...dto,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
