'use client';

import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      {/* Back to About Link */}
      <div className="absolute top-4 left-4">
        <a href="/About" className="text-pink-200 hover:underline text-lg">← Back to About</a>
      </div>

      {/* Header */}
      <header className="bg-pink-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Contact Me</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <section className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Feel free to reach out to me using the contact information below. I look forward to hearing from you!
          </p>

          <div className="space-y-4">
            {/* Email Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
              <p className="text-pink-900">
                <a href="mailto:wafa.khelifi2022@gmail.com" className="hover:underline">
                  wafa.khelifi2022@gmail.com
                </a>
              </p>
            </div>

            {/* Phone Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
              <p className="text-gray-700">+216 99 842 906</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p className="text-sm">© 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
