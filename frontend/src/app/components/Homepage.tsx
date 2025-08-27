'use client';

import { useState, useEffect } from 'react';
import { Star, Github, Code, Database, Zap, Users, GitFork, Eye, ArrowRight, CheckCircle } from 'lucide-react';
import Image from "next/image";
export default function Homepage() {
  const [stars, setStars] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Express.js Setup",
      description: "Fast, unopinionated web framework with best practices configured"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Prisma ORM",
      description: "Type-safe database access with auto-generated client"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript Ready",
      description: "Full TypeScript support with proper type definitions"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Production Ready",
      description: "Environment configs, error handling, and security middleware"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            APP is running...
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Express + Prisma
            <br />
            <span className="text-4xl md:text-5xl">Starter Kit</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A modern, production-ready Express.js starter with Prisma ORM, TypeScript, and best practices built-in. 
            Get your backend up and running in minutes, not hours.
          </p>
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href={process.env.NEXT_PUBLIC_REPO_URL}
              className="group flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Star className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Star this Repository
            </a>
            
            <a 
              href={process.env.NEXT_PUBLIC_PROFILE_URL}
              className="group flex items-center px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <Github className="w-5 h-5 mr-2" />
              Follow @hussainbinfazal
            </a>
          </div>
        </div>
        
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((feature, index) => (
            <div key={index} className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        
        <div className={`bg-white border border-gray-200 rounded-3xl p-8 mb-16 shadow-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2 text-gray-900">Clone & Install</h3>
              <code className="text-sm bg-gray-100 px-3 py-1 rounded text-green-700">npm install</code>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2 text-gray-900">Setup Database</h3>
              <code className="text-sm bg-gray-100 px-3 py-1 rounded text-green-700">npx prisma migrate dev</code>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2 text-gray-900">Start Developing</h3>
              <code className="text-sm bg-gray-100 px-3 py-1 rounded text-green-700">npm run dev</code>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Join the Community</h2>
          <p className="text-lg text-gray-600 mb-6">Join developers who are building amazing projects with this starter kit</p>
        </div>
        
        {/* Final CTA */}
        <div className={`text-center bg-white border border-gray-200 rounded-3xl p-8 shadow-lg transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to build something amazing?</h2>
          <p className="text-gray-600 mb-6">Star the repository to show your support and follow for more awesome projects!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/hussainbinfazal/your-repo-name" 
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Star className="w-4 h-4 mr-2" />
              Star Repository
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://github.com/hussainbinfazal" 
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-all duration-300 shadow-md"
            >
              <Github className="w-4 h-4 mr-2" />
              Follow on GitHub
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}