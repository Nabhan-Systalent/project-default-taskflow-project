'use client';

import React from 'react';
import { ProjectListProps } from './ProjectList.types';

export const ProjectList: React.FC<ProjectListProps> = ({ 
  projects = [], 
  isLoading = false, 
  error = null,
  onDelete 
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
        Error: {error}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-16 text-slate-500">
        <p>No projects found. Create your first project to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="p-5 border border-slate-200 rounded-xl hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-slate-900">{project.name}</h3>
              <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>{project.memberCount} members</span>
              <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
