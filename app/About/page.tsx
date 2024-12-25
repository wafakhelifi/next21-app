// app/about/page.tsx
'use client';

import React from 'react';
import Navbar from '../components/Navbar'; // Ensure this path is correct
import Footer from '../components/Footer'; // Ensure this path is correct
import Image from 'next/image'; // Use Next.js's optimized Image component
import PostList from '../components/PostList';

const posts = [
  {
    id: 1,
    title: 'Website of a Travel Agency',
    description: 'A modern travel platform designed with custom features to explore and book unique travel experiences.',
    link: 'Website-of-a-Travel-Agency',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects and skills.',
    link: 'Portfolio-Website',
  },
  {
    id: 3,
    title: 'House Rental Website',
    description: 'A dynamic platform for renting houses, built with streamlined search and listing management features.',
    link: 'House-Rental-Website',
  },
];


const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Profile Image */}
      <div className="w-42 h-52 mx-auto mt-8">
        <Image
          src="/assets/img/wafa_cv.jpg" // Path relative to the public folder
          alt="Wafa Khelifi"
          width={144}
          height={144}
          className="rounded-full"
          priority // Ensures the image loads quickly
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-pink-900 text-center">
              Wafa Khelifi - Student
            </h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* About Me Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I am a third-year student of applied computer science in management, specializing in Business Intelligence.
              I'm seeking a final internship to put my skills into practice and explore new areas. Passionate about technology,
              I aim to actively contribute to your team while developing my professional experience.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Next.js',
                'Tailwind CSS',
                'PHP',
                'JavaScript',
                'HTML5',
                'CSS3',
                'Python',
                'Java',
                'Web Scraping',
                'Power BI',
                'Cloud Computing',
                'ERP (Enterprise Resource Planning)',
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="bg-white shadow rounded-md p-4 text-center text-gray-800 font-semibold transform transition duration-500 ease-in-out opacity-0 translate-y-4 animate-skill"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
            <PostList posts={posts} />
          </section>

          {/* Contact Me Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Me</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thank you for visiting my portfolio! If you have any questions, feedback, or would like to discuss a potential collaboration,
              feel free to reach out to me. I look forward to connecting with you!
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="mailto:wafa.khelifi2022@gmail.com"
                className="px-4 py-2 bg-pink-900 text-white rounded hover:bg-pink-700 transition"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/wafa-khelifi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-900 text-white rounded hover:bg-pink-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/wafakhelifi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-900 text-white rounded hover:bg-pink-700 transition"
              >
                GitHub
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
