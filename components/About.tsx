import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC<any> = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="prose prose-invert max-w-none text-slate-400 mb-8 leading-loose">
              <p>{PERSONAL_INFO.bio}</p>
              <p className="mt-4">
                I thrive in dynamic environments where I can apply my knowledge of mobile architecture and cloud services to solve real-world problems. 
                Whether it's building a pixel-perfect Flutter UI or optimizing a Node.js API, I focus on code quality and user experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <MapPin size={20} className="text-primary" /> Location
                </div>
                <p className="text-slate-400">{PERSONAL_INFO.location}</p>
              </div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3 mb-2 text-white font-semibold">
                  <Briefcase size={20} className="text-secondary" /> Experience
                </div>
                <p className="text-slate-400">2+ Years</p>
              </div>
            </div>
          </div>

          {/* Timeline / Visual */}
          <div className="relative border-l-2 border-slate-800 ml-3 lg:ml-0 pl-8 space-y-12">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-primary"></span>
              <h3 className="text-xl font-bold text-white mb-1">Freelance Developer</h3>
              <p className="text-sm text-slate-500 mb-2 flex items-center gap-2"><Calendar size={14}/> 2022 - Present</p>
              <p className="text-slate-400">
                Delivered 10+ mobile and web applications for global clients using Flutter and Firebase.
              </p>
            </div>
            
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-secondary"></span>
              <h3 className="text-xl font-bold text-white mb-1">Flutter Developer</h3>
              <p className="text-sm text-slate-500 mb-2 flex items-center gap-2"><Calendar size={14}/> 2021 - 2022</p>
              <p className="text-slate-400">
                Collaborated with cross-functional teams to build and deploy featured-packed Android/iOS apps.
              </p>
            </div>

             <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-600"></span>
              <h3 className="text-xl font-bold text-white mb-1">Computer Science Degree</h3>
              <p className="text-sm text-slate-500 mb-2 flex items-center gap-2"><Calendar size={14}/> 2018 - 2022</p>
              <p className="text-slate-400">
                Focused on Software Engineering, Data Structures, and Mobile Computing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
