"use client";
import React from 'react';

// أيقونات SVG جديدة للمشاريع
const GlobeIcon = () => (
    <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586a2 2 0 012.828 0l.586.586M11 19v.01M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>
);

const StoreIcon = () => (
    <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);


export default function HomePage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-gradient-to-b from-indigo-900/50 to-slate-900">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Master <span className="text-pink-500">GraphQL</span> Today
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
          The modern way to build APIs. Ask for exactly what you need, nothing more.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
          Start Learning
        </button>
      </header>

      {/* Projects Section */}
      <main className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Explore Our Projects</h2>
          <p className="text-slate-400 mt-2">Discover applications built with GraphQL.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Project Card 1: Countries */}
          <a href="/countries" className="group block bg-slate-800/50 p-8 rounded-xl border border-slate-700 shadow-xl text-center transition-all duration-300 hover:border-pink-500 hover:-translate-y-2">
            <div className="flex justify-center mb-4"><GlobeIcon /></div>
            <h3 className="text-2xl font-bold mb-2">Countries Explorer</h3>
            <p className="text-slate-400 mb-4">
              Browse and search for countries using a public GraphQL API.
            </p>
            <span className="font-semibold text-pink-500 group-hover:underline">View Project &rarr;</span>
          </a>

          {/* Project Card 2: E-commerce Store 1 */}
          <a href="#" className="group block bg-slate-800/50 p-8 rounded-xl border border-slate-700 shadow-xl text-center transition-all duration-300 hover:border-pink-500 hover:-translate-y-2">
            <div className="flex justify-center mb-4"><StoreIcon /></div>
            <h3 className="text-2xl font-bold mb-2">Modern E-commerce</h3>
            <p className="text-slate-400 mb-4">
              A full-featured online store with a powerful GraphQL backend.
            </p>
            <span className="font-semibold text-pink-500 group-hover:underline">View Project &rarr;</span>
          </a>

          {/* Project Card 3: E-commerce Store 2 */}
          <a href="#" className="group block bg-slate-800/50 p-8 rounded-xl border border-slate-700 shadow-xl text-center transition-all duration-300 hover:border-pink-500 hover:-translate-y-2">
            <div className="flex justify-center mb-4"><StoreIcon /></div>
            <h3 className="text-2xl font-bold mb-2">Gadget Galaxy</h3>
            <p className="text-slate-400 mb-4">
              An electronic gadgets store powered by a flexible GraphQL API.
            </p>
            <span className="font-semibold text-pink-500 group-hover:underline">View Project &rarr;</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-800">
        <p className="text-slate-500">Ready to build better APIs? Dive into GraphQL.</p>
      </footer>
    </div>
  );
}
