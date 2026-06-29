import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [{ id: '1', name: 'Initial Project' }];

  findAll(): ProjectDto[] {
    return this.projects;
  }

  delete(id: string): void {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
