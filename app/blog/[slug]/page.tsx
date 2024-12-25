'use client';

import React from 'react';

// Fake project data (replace with your API or database)
const projects = [
  {
    slug: 'Website-of-a-Travel-Agency',
    title: 'Website of a Travel Agency',
    description:
      'A modern travel platform designed with custom features to explore and book unique travel experiences.',
    details: {
      Duration: '3 months',
      Role: 'Lead Developer',
      TechnologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'PHP' ,'Bootstrap'],
    },
  },
  {
    slug: 'Portfolio-Website',
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects and skills.',
    details: {
      Duration: '2 days',
      Role: 'Designer and Developer',
      TechnologiesUsed: ['Next.js', 'Tailwind CSS'],
    },
  },
  {
    slug: 'House-Rental-Website',
    title: 'House Rental Website',
    description:
      'A dynamic platform for renting houses, built with streamlined search and listing management features.',
    details: {
      Duration: '1 month',
      Role: 'Developer',
      TechnologiesUsed: ['Next.js', 'Tailwind CSS'],
    },
  },
];

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 relative">
        <div className="absolute top-4 left-4">
          <a href="/about" className="text-pink-900 hover:underline text-lg">← Back to About</a>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-700">Project Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      <div className="absolute top-4 left-4">
        <a href="/About" className="text-pink-900 hover:underline text-lg">← Back to About</a>
      </div>
      <div className="flex-grow max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Details</h2>
          <p className="text-gray-700"><strong>Duration:</strong> {project.details.Duration}</p>
          <p className="text-gray-700"><strong>Role:</strong> {project.details.Role}</p>
          <p className="text-gray-700"><strong>Technologies Used:</strong> {project.details.TechnologiesUsed.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
