 //app/blog/[slug]/page.tsx
 import ProjectDetailsClient from './ProjectDetails';

// Liste des projets (exemple statique, peut être remplacée par un fetch ou une DB)
const projects = [
  {
    slug: 'Website-of-a-Travel-Agency',
    title: 'Website of a Travel Agency',
    description:
      'A modern travel platform designed with custom features to explore and book unique travel experiences.',
    details: {
      Duration: '3 months',
      Role: 'Lead Developer',
      TechnologiesUsed: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap'],
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
      TechnologiesUsed: ['Next js', 'Tailwind CSS'],
    },
  },
];

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-700">Project Not Found</h1>
        <div className="absolute top-4 left-4">
          <a href="/About" className="text-pink-900 hover:underline text-lg">← Back to About</a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="absolute top-4 left-4">
        <a href="/About" className="text-pink-900 hover:underline text-lg">← Back to About</a>
      </div>
      <ProjectDetailsClient project={project} />
    </div>
  );
}
