import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskDto, CreateTaskDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get workspace tasks' })
  @ApiResponse({ status: 200, type: [TaskDto] })
  findAll(): TaskDto[] {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new task' })
  @ApiResponse({ status: 201, type: TaskDto })
  create(@Body() createTaskDto: CreateTaskDto): TaskDto {
    return this.tasksService.create(createTaskDto);
  }
}
