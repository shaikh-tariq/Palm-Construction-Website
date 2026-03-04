import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, Home, Paintbrush, Hammer, ShieldCheck, Ruler, Users } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      {/* Hero About Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">About Us</span>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
                Big Enough to Deliver,{' '}
                <span className="text-white/20 italic">Small Enough to Care.</span>
              </h1>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-6">
                At Palm Construction CA, we are dedicated to providing exceptional home improvement and construction services across California. Whether you envision a stunning kitchen remodel, a transformed outdoor living space, or a complete home renovation, our expert team is here to bring your dreams to life.
              </p>
              <p className="text-white/40 font-light leading-relaxed mb-10">
                From concept to completion, we collaborate closely with you to deliver results that match your vision and lifestyle. Our personalized approach prioritizes clear communication, innovative designs, and sustainable solutions. Whether it's a small upgrade or a large-scale renovation, Palm Construction CA combines experience, creativity, and superior craftsmanship to create spaces you'll cherish for years to come.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#2E7D32] text-white font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Get a Free Quote <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden border border-white/5">
              <img
                src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Beautiful home remodeling project by Palm Construction showing a modern kitchen renovation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Care About Section */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">We Care About The Small Details</span>
            <h2 className="text-5xl font-bold uppercase tracking-tighter italic">Our Promise To You.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { icon: Hammer, title: "Demolition & Site Clean-Up", desc: "Dealing with construction waste is one of the most inefficient tasks — we do it the right way, every time." },
              { icon: ShieldCheck, title: "Job Site Protection", desc: "We make sure all your furniture, home goods and surrounding space is covered promptly prior to our work." },
              { icon: Ruler, title: "Permit Expediting", desc: "Pulling city permits or inspection setups — we do all the running around for you and accompany you if needed." },
              { icon: Users, title: "Assigned Project Manager", desc: "You will always have a person assigned to your project for direct communications rather than an office phone number." },
              { icon: Home, title: "In-Home 3D Design", desc: "You no longer need to imagine how your home will look — with our 3D expert, you can see it right from the beginning." },
              { icon: Paintbrush, title: "Financing Available", desc: "We now offer financing plans. Leave your information and our financing team will help you understand your options." },
            ].map((item, i) => (
              <article key={i} tabIndex={0} className="glass p-12 border border-white/5 hover:bg-white hover:text-black transition-all duration-500 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-sm">
                <item.icon aria-hidden="true" className="w-10 h-10 text-[#2E7D32] mb-6 group-hover:text-black transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-white/40 group-hover:text-black/60 text-sm leading-relaxed transition-colors">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Service Areas</span>
            <h2 className="text-5xl font-bold uppercase tracking-tighter italic">Proudly Serving California.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed mt-6">
              In Palm Construction Inc, we're proud to offer our home remodeling services across multiple California regions, bringing quality craftsmanship right to your doorstep.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { office: "San Lorenzo", address: "17259 Hesperian Blvd. #7, San Lorenzo, CA 94580", phone: "(510) 999-1230" },
              { office: "La Mesa", address: "7317 El Cajon Blvd. #178, La Mesa, CA 91942", phone: "(619) 889-0758" },
              { office: "West Covina", address: "1730 W. Cameron Ave, Ste 200, West Covina, CA 91790", phone: "(818) 618-3896" },
            ].map((loc, i) => (
              <div key={i} className="p-10 border border-black/10 hover:bg-black hover:text-white transition-all duration-300 group">
                <MapPin aria-hidden="true" className="w-8 h-8 text-[#2E7D32] mb-6" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{loc.office}</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-4">{loc.address}</p>
                <div className="flex items-center gap-2">
                  <Phone aria-hidden="true" className="w-4 h-4 opacity-40" />
                  <a href={`tel:${loc.phone.replace(/[^\d+]/g, '')}`} className="text-sm font-bold text-[#2E7D32] group-hover:text-[#66BB6A]">{loc.phone}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#050505] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            Let Us Help You Turn Your House Into <span className="text-[#2E7D32]">The Home of Your Dreams!</span>
          </h2>
          <p className="text-white/40 text-lg font-light mb-12">
            CA Bay Area, CA San Diego Area & CA Los Angeles Area Remodeling Experts. Contact us today for a free in-home consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#2E7D32] text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all"
          >
            Get a Quote <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
