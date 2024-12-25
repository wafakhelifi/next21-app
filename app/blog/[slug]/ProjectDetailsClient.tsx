//app/blog/[slug]/rojectDetailsClient.tsx
 'use client';

import React from 'react';

export default function ProjectDetailsClient({ project }: { project: any }) {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">Project Not Found</h1>
        <div className="absolute top-4 left-4">
          <a href="/About" className="text-pink-900 hover:underline text-lg">← Back to About</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p>{project.description}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Details</h2>
        <p><strong>Duration:</strong> {project.details.Duration}</p>
        <p><strong>Role:</strong> {project.details.Role}</p>
        <p><strong>Technologies Used:</strong> {project.details.TechnologiesUsed.join(', ')}</p>
      </div>
    </div>
  );
}
