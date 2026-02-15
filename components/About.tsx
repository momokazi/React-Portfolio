import React from 'react';
import { PERSONAL_INFO, EXPERIENCE } from '../constants';
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC<any> = () => {
  // Show only top 3 roles
  const recentExperience = EXPERIENCE.slice(0, 3);

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

            <div className="grid grid-cols-2 gap-6 mb-8">
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

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Read Full Bio <ArrowRight size={18} />
            </Link>
          </div>

          {/* Timeline / Visual */}
          <div className="relative border-l-2 border-slate-800 ml-3 lg:ml-0 pl-8 space-y-12">
            {recentExperience.map((item, index) => (
              <div key={index} className="relative">
                <span className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-slate-600'}`}></span>
                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <p className="text-sm text-slate-500 mb-2 flex items-center gap-2">
                  <Briefcase size={14} className="text-primary" /> {item.company}
                </p>
                <p className="text-xs text-slate-500 mb-2 flex items-center gap-2 uppercase tracking-wider">
                  <Calendar size={14}/> {item.period}
                </p>
                <p className="text-slate-400 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
            
            <div className="relative">
               <Link to="/about" className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-1 mt-4">
                  View full history <ArrowRight size={14} />
               </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;