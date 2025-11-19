import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import shipImage from '../assets/ship1.jfif'
// 🟡 FIXED: Replaced the failing import with a direct public path.
// This assumes your image is located at 'public/hero-width.jpg'


// 1. Your "Why Choose Us" data
const features = [
    {
        title: 'Team of Seafarers',
        description: 'Our team consists of Masters and Ex-Chief Engineers with >200 years of combined experience, ensuring solutions are practical and effective.',
        id: 1,
    },
    {
        title: 'AI-Based Assessment',
        description: 'We utilize artificial intelligence for in-depth, data-driven assessments, providing unbiased and accurate insights.',
        id: 2,
    },
    {
        title: 'Advanced Technology',
        description: 'User-friendly AR/MR/XR/Metaverse, 2D/Anime/3D simulations for immersive and effective training.',
        id: 3,
    },
    {
        title: 'Domain Knowledge',
        description: 'As Subject Matter Experts, we provide deep domain knowledge that is critical for new builds, compliance, and strategic planning.',
        id: 4,
    },
    {
        title: 'Cost-Effective Solutions',
        description: 'Our focus on innovation and efficiency allows us to deliver high-impact, cost-effective solutions for our clients.',
        id: 5,
    },
    ];

    // Reusable Accordion Item component
    const AccordionItem = ({ title, description, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200">
        {/* Header (button) */}
        <button
            onClick={onToggle}
            className="flex justify-between items-center w-full py-5 text-left"
        >
            <span className={`text-lg font-semibold ${isOpen ? 'text-[#219EBC]' : 'text-[#023047]'}`}>
            {title}
            </span>
            <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            >
            {/* Chevron Right Icon */}
            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </motion.div>
        </button>
        
        {/* Content (collapsible) */}
        <AnimatePresence initial={false}>
            {isOpen && (
            <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
            >
                <p className="pb-5 text-base text-[#023047]/80">
                {description}
                </p>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
    };

    // Main Component
    const WhyChooseUs = () => {
    const [openId, setOpenId] = useState(features[0].id); // Default first item open

    return (
        <section className="bg-white py-16 sm:py-24" id="why-choose-us">
        <div className="container mx-auto px-6">
            {/* 🟡 CHANGED: Grid set to 60/40 split on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
            
            {/* --- Column 1: Content (60%) --- */}
            <div>
                {/* 🟡 FIXED: Added mb-8 for spacing */}
                <h1 className="text-4xl font-extrabold text-[#023047] sm:text-5xl tracking-tight mb-8">
                Why Choose Us
                </h1>
                {/* Stats */}
                <div className="flex space-x-12 mb-8">
                <div className="text-left">
                    <p className="text-5xl font-bold text-[#023047]">200+</p>
                    <p className="text-base text-[#023047]/80">Years Combined Experience</p>
                </div>
                <div className="text-left">
                    <p className="text-5xl font-bold text-[#023047]">400+</p>
                    <p className="text-base text-[#023047]/80">Crew Testified Globally</p>
                </div>
                </div>
                
                {/* Description */}
                <p className="mt-6 text-lg text-[#023047]/80">
                We deliver reliability with cutting-edge technology and a commitment 
                to performance, ensuring seamless and innovative solutions for the 
                maritime industry.
                </p>

                {/* Accordion List */}
                <div className="mt-8">
                {features.map((feature) => (
                    <AccordionItem
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    isOpen={openId === feature.id}
                    onToggle={() => setOpenId(openId === feature.id ? null : feature.id)}
                    />
                ))}
                </div>
            </div>

            {/* --- Column 2: Image (40%) --- */}
            {/* 🟡 CHANGED: Hidden on mobile/tablet, shown on desktop */}
            <div className="hidden lg:block">
                <motion.img
                src={shipImage}
                alt="Container Ship"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                />
            </div>
            
            </div>
        </div>
        </section>
    );
};

export default WhyChooseUs;