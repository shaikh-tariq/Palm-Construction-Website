import React from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

const Careers = () => {
  const values = [
    { icon: Users, title: "Collaborative Culture", desc: "We believe in the power of teamwork and diverse perspectives." },
    { icon: Briefcase, title: "Professional Growth", desc: "Continuous learning and clear career progression paths." },
    { icon: GraduationCap, title: "Apprentice Program", desc: "Nurturing the next generation of construction leaders." },
    { icon: Heart, title: "Well-being First", desc: "Comprehensive health and wellness support for our team." }
  ];

  const jobs = [
    { title: "Senior Project Manager", location: "Melbourne", type: "Full-Time" },
    { title: "Site Engineer", location: "Sydney", type: "Full-Time" },
    { title: "BIM Coordinator", location: "Brisbane", type: "Full-Time" },
    { title: "Safety Officer", location: "Melbourne", type: "Full-Time" }
  ];

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
          <div className="max-w-3xl mb-20">
            <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Join Our Team</span>
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
              Build Your <br />
              <span className="text-white/20 italic">Future.</span>
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              At Palm Construction, we don't just build structures; we build careers. 
              Join a team that values innovation, integrity, and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {values.map((value, i) => (
              <div key={i} className="glass p-8 border border-white/5">
                <value.icon className="w-10 h-10 text-[#2E7D32] mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white text-black p-12 md:p-20">
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-12 italic">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 border border-black/10 hover:bg-black hover:text-white transition-all duration-300 group">
                  <div>
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">{job.title}</h4>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="mt-6 md:mt-0 px-8 py-3 border border-black group-hover:border-white text-[10px] font-bold uppercase tracking-widest">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
