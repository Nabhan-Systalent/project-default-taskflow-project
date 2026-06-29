import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [
    { id: '1', name: 'Alpha' },
    { id: '2', name: 'Beta' },
  ];

  findAll(): ProjectDto[] {
    return this.projects;
  }

  delete(id: string): void {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    this.projects.splice(index, 1);
  }
}
