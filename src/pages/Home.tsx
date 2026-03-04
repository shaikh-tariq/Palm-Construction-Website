import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Home as HomeIcon,
  Paintbrush,
  Hammer,
  Ruler,
  TreePine,
  Wrench,
  Phone,
  Star,
  MapPin,
  Users,
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
          <source src="/bg_cons.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1 glass text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Proudly Serving San Diego · Los Angeles · Bay Area
          </span>
          <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
            Home Remodeling <span className="text-[#2E7D32]">Experts</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Licensed, bonded, and insured. From kitchen and bathroom remodels to complete home renovations, we bring your dreams to life with quality craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="group relative px-10 py-5 bg-[#2E7D32] text-white font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:pr-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <span className="relative z-10">Get a Free Quote</span>
              <ArrowRight aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Link>
            <a href="tel:+15626252600" className="glass px-10 py-5 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
              <Phone aria-hidden="true" className="w-4 h-4" /> (562) 625-2600
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div aria-hidden="true" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#2E7D32] to-transparent" />
      </motion.div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    { icon: HomeIcon, title: "Kitchen & Bathroom Remodeling", href: "/services", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Paintbrush, title: "Exterior & Interior Painting", href: "/services", img: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Hammer, title: "General Construction", href: "/services", img: "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Ruler, title: "Flooring & Baseboard", href: "/services", img: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: TreePine, title: "Patios & Decks", href: "/services", img: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Wrench, title: "Roofing & Gutters", href: "/services", img: "https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Services</span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter">What We <br />Do Best.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <Link key={i} to={s.href} className="group relative h-[400px] overflow-hidden border border-white/5 block">
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-60" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <s.icon aria-hidden="true" className="w-10 h-10 text-[#2E7D32] mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
                <h3 className="text-2xl font-bold uppercase tracking-tight">{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const SmallDetailsSection = () => {
  const details = [
    { icon: Hammer, title: "Demolition & Clean-Up", desc: "We handle construction waste the right way — efficient, thorough, and always clean." },
    { icon: ShieldCheck, title: "Furniture & Site Protection", desc: "All furniture, home goods and surrounding space is covered before work begins." },
    { icon: Ruler, title: "Permits & Inspections", desc: "We handle all city permits, inspection scheduling and regulatory compliance." },
    { icon: Users, title: "Assigned Project Manager", desc: "Direct communication with a dedicated PM — not just an office phone number." },
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-6 block">We Care About The Small Details</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8">
              Your Peace of Mind, <span className="text-white/20 italic">From A to Z.</span>
            </h2>
            <p className="text-white/40 font-light leading-relaxed mb-12">
              Dealing with home construction can be overwhelming. Our goal is to complete the job smoothly while considering your home so you will have peace of mind throughout the entire project.
            </p>
            <div className="space-y-8">
              {details.map((d, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#2E7D32]/50 transition-colors">
                    <d.icon aria-hidden="true" className="w-6 h-6 text-white/40 group-hover:text-[#2E7D32] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight mb-2">{d.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden border border-white/5">
            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Beautifully remodeled kitchen by Palm Construction" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const DesignPreviewSection = () => (
  <section className="py-32 bg-white text-black text-center">
    <div className="max-w-4xl mx-auto px-6">
      <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">In-Home 3D Design</span>
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">See It Before We Build It.</h2>
      <p className="text-lg text-black/60 font-light leading-relaxed mb-12">
        You no longer need to imagine how your home will look. With our professional 3D design expert, you can visualize your entire renovation right from the beginning — before a single nail is hammered.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { num: "01", title: "Consultation", desc: "We visit your home and discuss your vision, needs, and budget." },
          { num: "02", title: "3D Rendering", desc: "Our design team creates realistic 3D renderings of your project." },
          { num: "03", title: "Build", desc: "Once approved, our crew builds it exactly as you've seen it." },
        ].map((step, i) => (
          <div key={i} className="p-8 border border-black/10 text-left">
            <span className="text-5xl font-bold text-[#2E7D32]/20 block mb-4">{step.num}</span>
            <h4 className="text-xl font-bold uppercase tracking-tight mb-3">{step.title}</h4>
            <p className="text-sm text-black/60 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[#2E7D32] text-white font-bold uppercase tracking-widest hover:scale-105 transition-all">
        Schedule a Design Consultation <ArrowRight aria-hidden="true" className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

const ServiceAreasSection = () => (
  <section className="py-32 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-[#2E7D32] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Service Areas</span>
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
          Serving All of <span className="text-[#2E7D32]">California.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { area: "Bay Area", cities: "San Lorenzo, Oakland, Hayward, Fremont", phone: "(510) 999-1230" },
          { area: "San Diego", cities: "La Mesa, Chula Vista, El Cajon, Encinitas", phone: "(619) 889-0758" },
          { area: "Los Angeles", cities: "West Covina, Pasadena, Burbank, Glendale", phone: "(818) 618-3896" },
        ].map((loc, i) => (
          <div key={i} className="glass p-10 border border-white/5 text-center group hover:border-[#2E7D32]/30 transition-all">
            <MapPin aria-hidden="true" className="w-10 h-10 text-[#2E7D32] mx-auto mb-6" />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{loc.area}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">{loc.cities}</p>
            <a href={`tel:${loc.phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center gap-2 text-[#2E7D32] font-bold text-sm uppercase tracking-widest hover:underline">
              <Phone aria-hidden="true" className="w-4 h-4" /> {loc.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        {[
          { quote: "Palm Construction completely transformed our kitchen. The attention to detail was incredible — they covered every piece of furniture and left the house spotless every day.", author: "Maria G.", role: "Kitchen Remodel, West Covina" },
          { quote: "From the 3D design consultation to the final walkthrough, every step was professional and transparent. Our new outdoor patio is a dream come true.", author: "James T.", role: "Patio & Deck, San Diego" },
        ].map((t, i) => (
          <div key={i} className="relative">
            <Star aria-hidden="true" className="w-8 h-8 text-[#2E7D32] mb-6" />
            <div className="flex gap-1 mb-6">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#2E7D32] fill-[#2E7D32]" />)}</div>
            <p className="text-xl font-light leading-relaxed mb-8 italic text-white/80">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#2E7D32]" />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest">{t.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinancingSection = () => (
  <section className="py-24 bg-[#2E7D32] text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6">We Now Offer Financing Plans!</h2>
      <p className="text-white/80 text-lg font-light mb-10 max-w-2xl mx-auto">
        Don't let budget hold back your dream renovation. Our financing team will help you understand the options that best fit your project.
      </p>
      <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-all">
        Learn About Financing <ArrowRight aria-hidden="true" className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

const palmGalleryImages = [
  { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern kitchen remodel', caption: 'Kitchen Renovation — West Covina' },
  { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Bathroom renovation', caption: 'Bathroom Remodel — San Diego' },
  { src: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Outdoor patio and deck', caption: 'Patio & Deck — Bay Area' },
  { src: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Interior painting project', caption: 'Interior Painting — La Mesa' },
  { src: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Hardwood flooring installation', caption: 'Flooring Installation — San Lorenzo' },
  { src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Exterior home remodel', caption: 'Full Home Renovation — Los Angeles' },
  { src: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modern living room', caption: 'Living Room Transformation — West Covina' },
  { src: 'https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Roofing project', caption: 'Roof & Gutter — San Diego' },
];

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Hero />
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
        <ServicesGrid />
      </motion.div>
      <SmallDetailsSection />
      <DesignPreviewSection />
      <ImageGallery images={palmGalleryImages} accentColor="#2E7D32" title="Recent Projects." subtitle="Project Gallery" />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FinancingSection />
      <section className="py-32 bg-[#0a0a0a] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">Ready to Transform <span className="text-[#2E7D32]">Your Home?</span></h2>
          <p className="text-white/40 text-lg font-light mb-12">Get a free in-home consultation and 3D design preview. Our team is ready to bring your remodeling vision to life.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="px-12 py-6 bg-[#2E7D32] text-white font-bold uppercase tracking-widest hover:scale-105 transition-all">Get a Free Quote</Link>
            <a href="tel:+15626252600" className="px-12 py-6 glass text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Call (562) 625-2600</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
