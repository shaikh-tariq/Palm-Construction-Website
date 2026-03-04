import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}

interface Props {
    images: GalleryImage[];
    accentColor: string;
    title?: string;
    subtitle?: string;
    autoPlay?: boolean;
    interval?: number;
}

const ImageGallery: React.FC<Props> = ({
    images,
    accentColor,
    title = "Our Work",
    subtitle = "Project Gallery",
    autoPlay = true,
    interval = 4000,
}) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, next]);

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 1.05 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.95 }),
    };

    return (
        <section className="py-32 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="font-bold uppercase tracking-[0.3em] text-xs mb-4 block" style={{ color: accentColor }}>
                            {subtitle}
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter">
                            {title}
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={prev}
                            aria-label="Previous image"
                            className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors"
                            style={{ '--hover-color': accentColor } as React.CSSProperties}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next image"
                            className="w-14 h-14 border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Main carousel */}
                <div className="relative aspect-[16/9] overflow-hidden border border-white/5">
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.img
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                            src={images[current].src}
                            alt={images[current].alt}
                            className="absolute inset-0 w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Caption */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`cap-${current}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="absolute bottom-8 left-8 right-8 z-10"
                        >
                            {images[current].caption && (
                                <p className="text-lg font-bold uppercase tracking-widest mb-2">{images[current].caption}</p>
                            )}
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold" style={{ color: accentColor }}>
                                    {String(current + 1).padStart(2, '0')}
                                </span>
                                <div className="h-[1px] flex-1 bg-white/20">
                                    <motion.div
                                        key={`prog-${current}`}
                                        className="h-full"
                                        style={{ backgroundColor: accentColor }}
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: interval / 1000, ease: 'linear' }}
                                    />
                                </div>
                                <span className="text-sm text-white/40">
                                    {String(images.length).padStart(2, '0')}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Thumbnails */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                            aria-label={`View image ${i + 1}: ${img.alt}`}
                            className={`shrink-0 w-24 h-16 overflow-hidden border-2 transition-all duration-300 ${i === current ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                                }`}
                            style={{ borderColor: i === current ? accentColor : 'transparent' }}
                        >
                            <img src={img.src} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
