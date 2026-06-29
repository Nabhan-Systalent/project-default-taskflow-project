import { Module } from '@nestjs/common';
import { TasksController } from './tasks-projects/tasks.controller';
import { ProjectsController } from './tasks-projects/projects.controller';
import { TasksService } from './tasks-projects/tasks.service';
import { ProjectsService } from './tasks-projects/projects.service';

/**
 * Story module for story-2 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [TasksController, ProjectsController],
  providers: [TasksService, ProjectsService],
})
export class Story2Module {}
