import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Building2, CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  // Mock data for service details
  const service = {
    title: id?.replace(/-/g, ' ').toUpperCase() || "INDUSTRIAL CONSTRUCTION",
    icon: Building2,
    description: "Our industrial construction division specializes in the design and delivery of high-performance facilities. From automated distribution centers to complex manufacturing plants, we provide end-to-end solutions that prioritize operational efficiency and future-proof engineering.",
    benefits: [
      "Custom-engineered structural solutions for heavy machinery.",
      "Integrated smart building systems for energy monitoring.",
      "Fast-track construction methodologies to minimize downtime.",
      "Compliance with all national safety and environmental standards."
    ],
    process: [
      { step: "01", title: "Consultation", desc: "Understanding your operational requirements and long-term goals." },
      { step: "02", title: "Design & BIM", desc: "Creating detailed 3D models to optimize space and structural integrity." },
      { step: "03", title: "Construction", desc: "Executing the build with precision and rigorous safety oversight." },
      { step: "04", title: "Handover", desc: "Comprehensive testing, commissioning, and staff training." }
    ],
    img: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1200"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/services" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 uppercase text-xs font-bold tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm p-1">
          <ArrowLeft aria-hidden="true" className="w-4 h-4" /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">{service.title}</h1>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
              {service.description}
            </p>

            <div className="space-y-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 aria-hidden="true" className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-white/80 font-light">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden border border-white/5">
            <img src={service.img} alt={`Detailed graphic depicting ${service.title}`} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16 italic">Our Delivery Process</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {service.process.map((item, i) => (
              <div key={i} className="relative group">
                <span className="text-6xl font-bold opacity-10 font-display mb-4 block group-hover:text-primary group-hover:opacity-100 transition-all">{item.step}</span>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16 italic">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Structural Load", value: "Up to 50kN/m²" },
              { label: "Clear Height", value: "Min 12.5m" },
              { label: "Fire Rating", value: "FRL 120/120/120" },
              { label: "BIM Level", value: "Level 3 (LOD 400)" },
              { label: "Sustainability", value: "6-Star Green Star" },
              { label: "Automation", value: "ASRS Integrated" }
            ].map((spec, i) => (
              <div key={i} className="glass p-8 border border-white/5">
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">{spec.label}</p>
                <p className="text-xl font-bold text-primary">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-24 border-t border-white/10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Related Projects</h2>
            <Link to="/projects" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm p-1">View All Projects</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nexus Logistics Hub", img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "Quantum Data Center", img: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800" },
              { title: "The Horizon Tower", img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ].map((p, i) => (
              <Link key={i} to={`/projects/${p.title.toLowerCase().replace(/\s+/g, '-')}`} className="group relative aspect-video overflow-hidden border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm block" aria-label={`View related project: ${p.title}`}>
                <img src={p.img} alt={`Thumbnail for ${p.title}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
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

export default ServiceDetail;
