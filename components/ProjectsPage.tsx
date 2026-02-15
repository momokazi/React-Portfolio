import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ArrowUpRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Mobile' | 'Web' | 'Tool'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.overview.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Project Gallery</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A complete collection of my open-source contributions, client work, and experimental apps.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          
          {/* Filters */}
          <div className="flex p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {['All', 'Mobile', 'Web', 'Tool'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  filter === cat 
                    ? 'text-white' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder-slate-400 dark:placeholder-slate-600 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
               {/* Image Cap */}
               <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="absolute top-4 right-4 z-20">
                     <span className="px-3 py-1 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-slate-900 dark:text-white text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                        {project.category}
                     </span>
                  </div>
               </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 p-1 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                         <img src={project.logoUrl} alt="logo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{project.title}</h3>
                        <p className="text-xs text-slate-500 uppercase tracking-wide">{project.subtitle}</p>
                      </div>
                   </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                  {project.overview}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded text-slate-500 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded text-slate-500">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                     <a href={project.githubUrl} target="_blank" className="flex-1 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                       <Github size={16} /> Code
                     </a>
                     {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" className="flex-1 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                          <ArrowUpRight size={16} /> Demo
                        </a>
                     )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
           <div className="text-center py-20">
              <h3 className="text-2xl text-slate-500 font-bold mb-2">No projects found</h3>
              <p className="text-slate-600 dark:text-slate-400">Try adjusting your filters or search term.</p>
           </div>
        )}

      </div>
    </div>
  );
};

export default ProjectsPage;