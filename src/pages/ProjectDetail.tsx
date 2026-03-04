import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Maximize, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  // Mock data for project details
  const project = {
    title: id?.replace(/-/g, ' ').toUpperCase() || "THE HORIZON TOWER",
    location: "West Covina, CA",
    year: "2023",
    category: "Commercial",
    area: "45,000 m²",
    value: "$240M",
    client: "Global Real Estate Partners",
    description: "The Horizon Tower is a landmark commercial development that redefines the Sydney skyline. This 45-story tower features state-of-the-art office spaces, integrated retail hubs, and sustainable building systems that have earned it a 6-Star Green Star rating.",
    challenges: [
      "Complex structural engineering for the unique cantilevered design.",
      "Strict environmental regulations and sustainability targets.",
      "Logistical coordination in a high-density urban environment."
    ],
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 uppercase text-xs font-bold tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm p-1">
          <ArrowLeft aria-hidden="true" className="w-4 h-4" /> Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">{project.title}</h1>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-12 mb-12">
              <div>
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Location</p>
                <div className="flex items-center gap-2">
                  <MapPin aria-hidden="true" className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">{project.location}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Completion</p>
                <div className="flex items-center gap-2">
                  <Calendar aria-hidden="true" className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">{project.year}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Area</p>
                <div className="flex items-center gap-2">
                  <Maximize aria-hidden="true" className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">{project.area}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Project Value</p>
                <div className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-primary font-bold">$</span>
                  <span className="text-sm font-bold">{project.value}</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Key Challenges</h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex gap-4 text-white/60">
                  <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-light">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden border border-white/5 bg-white/5 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={project.images[currentImage]}
                  alt={`${project.title} ${currentImage}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronLeft aria-hidden="true" className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronRight aria-hidden="true" className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`aspect-video overflow-hidden border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${currentImage === i ? 'border-primary opacity-100 scale-105' : 'border-white/5 opacity-40 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumbnail ${i + 1} of the ${project.title} project`} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="py-24 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-10 italic">Sustainability Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Solar Integration", desc: "500kW rooftop solar array providing 40% of building energy." },
                  { title: "Water Recycling", desc: "Advanced greywater treatment system for landscape irrigation." },
                  { title: "Smart Lighting", desc: "Automated LED systems with daylight harvesting sensors." },
                  { title: "Green Star", desc: "Targeting 6-Star Green Star rating for design and as-built." }
                ].map((item, i) => (
                  <div key={i} className="glass p-6 border border-white/5">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-primary">{item.title}</h4>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-10 italic">Materials & Tech</h3>
              <div className="space-y-6">
                {[
                  { label: "Structural Steel", value: "High-tensile recycled Australian steel." },
                  { label: "Concrete", value: "Low-carbon concrete mix with 30% fly ash replacement." },
                  { label: "Glass", value: "High-performance double glazing with low-E coating." },
                  { label: "BIM Tech", value: "Full LOD 400 digital twin for facility management." }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-sm font-bold uppercase tracking-widest text-white/40">{item.label}</span>
                    <span className="text-sm font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16 italic">Similar Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nexus Logistics Hub", img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Quantum Data Center", img: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Emerald Retail Park", img: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ].map((p, i) => (
              <Link key={i} to={`/projects/${p.title.toLowerCase().replace(/\s+/g, '-')}`} className="group relative aspect-video overflow-hidden border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm block" aria-label={`View details for ${p.title}`}>
                <img src={p.img} alt={`Cover image for ${p.title}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors pointer-events-none" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                  <h4 className="text-lg font-bold uppercase tracking-tight">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
