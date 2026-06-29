import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskResponseDto, CreateTaskDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get workspace tasks' })
  @ApiResponse({ status: 200, type: [TaskResponseDto] })
  listTasks(): TaskResponseDto[] {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new task' })
  @ApiResponse({ status: 201, type: TaskResponseDto })
  createTask(@Body() dto: CreateTaskDto): TaskResponseDto {
    return this.tasksService.create(dto);
  }
}
