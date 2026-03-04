import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Clock, DollarSign, Maximize } from 'lucide-react';

const CaseStudy = () => {
  const { id } = useParams();

  // Mock data for case study details
  const caseStudy = {
    title: id?.replace(/-/g, ' ').toUpperCase() || "THE HORIZON TOWER",
    location: "West Covina, CA",
    year: "2023",
    category: "Commercial",
    area: "45,000 m²",
    value: "$240M",
    client: "Global Real Estate Partners",
    description: "The Horizon Tower is a landmark commercial development that redefines the Sydney skyline. This 45-story tower features state-of-the-art office spaces, integrated retail hubs, and sustainable building systems that have earned it a 6-Star Green Star rating.",
    overview: "Commissioned by Global Real Estate Partners, the Horizon Tower project aimed to create a world-class commercial hub in the heart of Sydney's CBD. The project required a delicate balance between iconic architectural design and rigorous functional requirements. Our team was responsible for the full structural delivery, from initial foundation works to the complex cantilevered crown assembly. The result is a 220-meter tall structure that stands as a testament to modern engineering and sustainable construction practices.",
    keyChallenges: [
      { title: "Structural Complexity", desc: "The unique cantilevered design required innovative structural solutions to manage wind loads and seismic stability without compromising the open-plan floor plates." },
      { title: "Urban Logistics", desc: "Operating in a high-density CBD environment meant that all deliveries and heavy lifts had to be coordinated within tight windows to minimize city disruption." },
      { title: "Sustainability Targets", desc: "Achieving a 6-Star Green Star rating required the integration of advanced greywater systems, high-performance glazing, and low-carbon materials throughout the build." },
      { title: "Timeline Pressure", desc: "The client required a fast-track delivery to meet pre-lease commitments, necessitating a highly efficient 24/7 construction schedule." }
    ],
    solutionsImplemented: [
      { title: "Advanced BIM Integration", desc: "We utilized Level 3 BIM (LOD 400) to create a full digital twin, allowing for real-time clash detection and precise off-site fabrication of structural components." },
      { title: "Hybrid Core System", desc: "Implemented a high-strength concrete core combined with a perimeter steel frame to provide maximum stability while allowing for column-free interior spaces." },
      { title: "Modular Construction", desc: "To accelerate the timeline, we used modular bathroom pods and pre-assembled facade panels, reducing on-site labor and improving quality control." },
      { title: "Smart Site Management", desc: "Deployed IoT sensors across the site to monitor noise, dust, and vibration levels, ensuring compliance with strict urban construction regulations." }
    ],
    measurableOutcomes: [
      { title: "Early Delivery", desc: "The project was handed over 2 months ahead of the original 34-month schedule, allowing tenants to begin fit-outs earlier than expected." },
      { title: "Sustainability Excellence", desc: "Achieved the targeted 6-Star Green Star rating, with the building currently performing 15% better than the initial energy efficiency projections." },
      { title: "Safety Milestone", desc: "Completed over 2 million man-hours with zero Lost Time Injuries (LTI), setting a new safety benchmark for high-rise construction in the region." },
      { title: "Cost Efficiency", desc: "Through value engineering and precise BIM-led procurement, we delivered the project 5% under the initial $240M budget." }
    ],
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 uppercase text-xs font-bold tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm p-1">
          <ArrowLeft aria-hidden="true" className="w-4 h-4" /> Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Case Study</span>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">{caseStudy.title}</h1>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
              {caseStudy.description}
            </p>

            <div className="grid grid-cols-3 gap-8 border-y border-white/10 py-12 mb-12">
              <div>
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Area</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{caseStudy.area}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Value</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{caseStudy.value}</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/40 mb-2">Duration</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">32 Months</span>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square overflow-hidden border border-white/5">
            <img src={caseStudy.images[0]} alt={`Main visual showing ${caseStudy.title}`} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="mb-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold uppercase tracking-tighter mb-8 italic">Project Overview</h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <div className="glass p-12 border border-white/5">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-primary italic">Key Challenges</h3>
            <div className="space-y-8">
              {caseStudy.keyChallenges.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed pl-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-12 border border-white/5">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-primary italic">Solutions Implemented</h3>
            <div className="space-y-8">
              {caseStudy.solutionsImplemented.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed pl-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-12 border border-white/5">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-primary italic">Measurable Outcomes</h3>
            <div className="space-y-8">
              {caseStudy.measurableOutcomes.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-bold uppercase tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed pl-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-16 italic">Project Performance</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                <Clock aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold uppercase tracking-tight mb-1">Ahead of Schedule</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Delivered 2 Months Early</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                <DollarSign aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold uppercase tracking-tight mb-1">Under Budget</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">5% Cost Reduction Achieved</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                <TrendingUp aria-hidden="true" className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold uppercase tracking-tight mb-1">Zero Incidents</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Perfect Safety Record</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="glass p-12 border border-white/5 relative">
              <span className="text-8xl font-serif text-primary opacity-10 absolute -top-10 -left-6">"</span>
              <p className="text-2xl font-light leading-relaxed mb-8 italic text-white/80 relative z-10">
                "Palm Construction's ability to navigate the complex structural requirements of the Horizon Tower was unparalleled. They didn't just meet our expectations; they redefined what we thought was possible in urban construction."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-primary" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">David Richardson</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">CEO, Global Real Estate Partners</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-10 italic">Performance Data</h3>
              <div className="space-y-8">
                {[
                  { label: "Safety Incidents", value: "0", target: "0" },
                  { label: "Waste Diversion", value: "92%", target: "90%" },
                  { label: "Local Procurement", value: "85%", target: "75%" },
                  { label: "BIM Accuracy", value: "99.8%", target: "99%" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                      <span className="text-white/40">{stat.label}</span>
                      <span className="text-primary">{stat.value} <span className="text-white/20 text-[8px]">/ Target {stat.target}</span></span>
                    </div>
                    <div className="h-1 bg-white/5 w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.value.includes('%') ? stat.value : '100%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 border-t border-white/10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic">Key Project Imagery</h2>
            <div className="flex gap-4">
              <button
                aria-label="View fullscreen gallery"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Maximize aria-hidden="true" className="w-5 h-5 text-white/40" />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video overflow-hidden border border-white/5">
              <img src={caseStudy.images[1]} alt="Detail 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-video overflow-hidden border border-white/5">
              <img src={caseStudy.images[2]} alt="Detail 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
