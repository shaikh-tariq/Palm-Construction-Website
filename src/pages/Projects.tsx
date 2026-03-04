import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Maximize } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "The Horizon Tower",
      location: "West Covina, CA",
      category: "Commercial",
      year: "2023",
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Nexus Logistics Hub",
      location: "West Covina, CA",
      category: "Industrial",
      year: "2024",
      img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Quantum Data Center",
      location: "West Covina, CA",
      category: "Infrastructure",
      year: "2023",
      img: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Emerald Retail Park",
      location: "Perth, WA",
      category: "Commercial",
      year: "2022",
      img: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Pacific Bridge Link",
      location: "Auckland, NZ",
      category: "Infrastructure",
      year: "2024",
      img: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Solaris Energy Farm",
      location: "Adelaide, SA",
      category: "Industrial",
      year: "2023",
      img: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Portfolio</span>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
                Landmark <br />
                <span className="text-white/20 italic">Achievements.</span>
              </h1>
              <p className="text-xl text-white/60 font-light leading-relaxed mt-6">
                A proven track record of delivering complex civil and commercial builds on schedule, on budget, and incident-free.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {['All', 'Commercial', 'Industrial', 'Infrastructure'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] ${filter === cat ? 'bg-[#2E7D32] border-[#2E7D32] text-black' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[4/5] overflow-hidden border border-white/5"
                >
                  <Link
                    to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block absolute inset-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2E7D32] focus-visible:ring-inset z-10"
                    aria-label={`View details for ${project.title}`}
                  >
                    <img
                      src={project.img}
                      alt={`Exterior view of ${project.title}, a ${project.category} project located in ${project.location}`}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute inset-0 p-10 flex flex-col justify-end pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#2E7D32] mb-2">{project.category}</span>
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">{project.title}</h3>

                      <div className="flex items-center gap-6 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-2">
                          <MapPin aria-hidden="true" className="w-3 h-3 text-white/40" />
                          <span className="text-[10px] uppercase tracking-widest text-white/40">{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar aria-hidden="true" className="w-3 h-3 text-white/40" />
                          <span className="text-[10px] uppercase tracking-widest text-white/40">{project.year}</span>
                        </div>
                      </div>

                      <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-[#2E7D32] transition-colors">
                        View Project <ArrowRight aria-hidden="true" className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
