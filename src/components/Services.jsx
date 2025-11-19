import React from 'react';
import { motion } from 'framer-motion';
import Dash from '../assets/Dash.png';
import LMS from '../assets/LMS.jfif';

// --- Icons for your 5 services ---
const InspectionIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const LearningIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
  </svg>
);
const WellnessIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);
const DashboardIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
  </svg>
);
const IncidentIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#219EBC]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);
// --- End Icons ---

// Framer Motion variants
const cardContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};


const Services = () => {
    return (
        <section className="bg-white py-16 sm:py-24" id="services">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div 
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-[#023047] sm:text-5xl">
                        A New Era of Maritime 
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[#023047]/80">
                        Experience our comprehensive digital solutions, from AI-powered inspections 
                        to immersive crew training and wellness platforms.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* --- Row 1: Large Feature Cards --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Card 1: Admin Dashboard */}
                        <motion.div 
                            variants={cardItemVariants}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <img
                                    src={Dash}
                                    alt="Admin Dashboard"
                                    className="w-full h-64 md:h-full object-cover"
                                />
                                <div className="p-8">
                                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#167B7B] bg-[#167B7B]/10 mb-4">
                                        <DashboardIcon />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#023047]">Smart Admin Dashboard</h3>
                                    <ul className="mt-4 space-y-3 text-base text-[#023047]/80">
                                        <li className="flex items-center space-x-3"><CheckIcon /> <span>Crew & Training Management</span></li>
                                        <li className="flex items-center space-x-3"><CheckIcon /> <span>Compliance Status Monitoring</span></li>
                                        <li className="flex items-center space-x-3"><CheckIcon /> <span>Inspection & Audit Overview</span></li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Learning Management (LMS) */}
                        <motion.div 
                            variants={cardItemVariants}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <img
                                    src={LMS}
                                    alt="Learning Management System"
                                    className="w-full h-64 md:h-full object-cover"
                                />
                                <div className="p-8">
                                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#219EBC] bg-[#219EBC]/10 mb-4">
                                        <LearningIcon />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#023047]">Learning Management</h3>
                                    <ul className="mt-4 space-y-3 text-base text-[#023047]/80">
                                        <li className="flex items-center space-x-3"><CheckIcon /> <span>World's First LNG/Methanol Training</span></li>
                                        <li className="flex items-center space-x-3"><CheckIcon /> <span>AR/MR/XR Immersive Modules</span></li>
                                        <li className="flex items-center space-x-3"><CheckIcon /> <span>Certification & Compliance Tracking</span></li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- Row 2: Smaller Feature Cards --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        
                        {/* Card 3: Inspection Audit */}
                        <motion.div 
                            variants={cardItemVariants}
                            className="bg-white p-8 rounded-2xl shadow-xl"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#FFB703] bg-[#FFB703]/10 mb-4">
                                <InspectionIcon />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#023047]">Inspection Audit</h3>
                            <p className="mt-2 text-base text-[#023047]/80">
                                Streamline vessel inspections and audits with our AI-powered digital platform.
                            </p>
                        </motion.div>

                        {/* Card 4: Wellness Platform */}
                        <motion.div 
                            variants={cardItemVariants}
                            className="bg-white p-8 rounded-2xl shadow-xl"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#FB8500] bg-[#FB8500]/10 mb-4">
                                <WellnessIcon />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#023047]">Wellness Platform</h3>
                            <p className="mt-2 text-base text-[#023047]/80">
                                Support your crew's mental and physical well-being with our dedicated resources.
                            </p>
                        </motion.div>

                        {/* Card 5: Incident Management */}
                        <motion.div 
                            variants={cardItemVariants}
                            className="bg-white p-8 rounded-2xl shadow-xl"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#023047] bg-[#023047]/10 mb-4">
                                <IncidentIcon />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#023047]">Incident Management</h3>
                            <p className="mt-2 text-base text-[#023047]/80">
                                Report, track, and analyze incidents with our intuitive 2D/3D recreation tools.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;