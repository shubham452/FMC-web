import React from 'react';
import { motion } from 'framer-motion';

// --- Icons (Unchanged) ---
const ConsultancyIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);
const DigitalIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.125a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V1.875a.75.75 0 0 1 .75-.75ZM10.5 10.875a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0v-5.25a.75.75 0 0 1 .75-.75ZM10.5 19.875a.75.75 0 0 1 .75.75v.375a.75.75 0 0 1-1.5 0v-.375a.75.75 0 0 1 .75-.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 1.125a.75.75 0 0 1 .75.75v19.5a.75.75 0 0 1-1.5 0V1.875a.75.75 0 0 1 .75-.75ZM15 1.125a.75.75 0 0 1 .75.75v19.5a.75.75 0 0 1-1.5 0V1.875a.75.75 0 0 1 .75-.75Z" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#219EBC] flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);
const FuelIcon = () => (
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047l2.252 2.252A6 6 0 0 0 12 18.75a6 6 0 0 0 5.1-2.93l-1.738-1.738Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047l-2.252 2.252A6 6 0 0 0 3 13.5a6 6 0 0 0 5.1 8.93l1.738 1.738A8.25 8.25 0 0 0 12 21a8.25 8.25 0 0 0 5.962-2.392l2.252-2.252a6 6 0 0 0 .9-7.298l-1.738-1.738A6 6 0 0 0 12 3a6 6 0 0 0-2.1.43l2.252 2.252Z" />
  </svg>
);
// --- End Icons ---

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

// Data for the 2-column list
const consultancyServices = [
  { title: 'New Build Consultancy', description: 'Expert guidance for new vessel constructions.' },
  { title: 'Survey Inspection (Polar Regions)', description: 'Most preferred company for polar operations.' },
  { title: 'Smart Ships Collaboration', description: 'Partnering for innovative smart ship solutions.' },
  { title: 'Consulting for Emulators', description: 'Expert consultation for marine emulators.' },
];
const digitalServices = [
  { title: 'Marine Sentary R&D', description: "Active R&D for next-gen vessel safety." },
  { title: '2D/3D Incident Recreation', description: 'Advanced video analysis for training.' },
  { title: 'Seafarers Wellness Program', description: 'Holistic programs for crew well-being.' },
  { title: 'Immersive L&D Platform', description: 'Immersive Learning & Development platform.' },
];

// Data for the 4-column training cards
const trainingData = [
    { title: "World's First LNG Bunkering Training", description: "Pioneering AR & XR training for LNG.", icon: FuelIcon, color: "text-[#FFB703]", bg: "bg-[#167B7B]/10", hoverBg: "hover:bg-[#167B7B]" },
    { title: "First Methanol Fuel Training", description: "Specialized, world-first courses for handling methanol.", icon: FuelIcon, color: "text-[#219EBC]", bg: "bg-[#167B7B]/10", hoverBg: "hover:bg-[#167B7B]" },
    { title: "NH3 Dual Fuel Trainings", description: "Cutting-edge training for NH3 dual-fuel engines.", icon: FuelIcon, color: "text-[#FB8500]", bg: "bg-[#167B7B]/10", hoverBg: "hover:bg-[#167B7B]" },
    { title: "Ammonia Fuel Training", description: "Comprehensive safety training for ammonia as a fuel.", icon: FuelIcon, color: "text-[#167B7B]", bg: "bg-[#167B7B]/10", hoverBg: "hover:bg-[#167B7B]" },
];

// 🟡 Single Card Component for the bottom 4 cards - UPDATED
const TrainingCard = ({ title, description, icon: Icon, color, bg, hoverBg }) => (
  <motion.div
    variants={itemVariants}
    className={`
      relative p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 h-full
      bg-white
      ${hoverBg}
      group
    `}
  >
    <div className={`
      flex-shrink-0 mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg 
      ${color} ${bg}
      transition-colors duration-300
      group-hover:bg-white/20 group-hover:text-white
    `}>
      <Icon />
    </div>
    <h3 className={`
      text-xl font-semibold text-[#023047]
      transition-colors duration-300
      group-hover:text-white
    `}>
      {title}
    </h3>
    <p className={`
      mt-2 text-base text-[#023047]/80
      transition-colors duration-300
      group-hover:text-white/90
    `}>
      {description}
    </p>
  </motion.div>
);

// List Item for the top 2 cards
const FeatureListItem = ({ title, description }) => (
  <motion.div variants={itemVariants} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100">
    <CheckIcon />
    <div>
      <h4 className="text-lg font-semibold text-[#023047]">{title}</h4>
      <p className="text-base text-[#023047]/80">{description}</p>
    </div>
  </motion.div>
);


const WhatSetsUsApart = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="what-sets-us-apart">
      <div className="container mx-auto px-6 space-y-20">

        {/* --- COMMON HEADER --- */}
        <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-[#023047] sm:text-5xl">
            What Sets Us Apart
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#023047]/80">
            Our unique combination of seagoing experience and high-tech innovation allows us to deliver solutions that are both practical and state-of-the-art.
          </p>
        </motion.div>

        {/* --- Section 1: 2-Column Main Services --- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {/* Left Card */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#219EBC] bg-[#219EBC]/10">
                <ConsultancyIcon />
              </span>
              <h2 className="text-3xl font-bold text-[#023047]">Consultancy & Operations</h2>
            </div>
            <div className="space-y-4">
              {consultancyServices.map((item) => (
                <FeatureListItem key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#FFB703] bg-[#FFB703]/10">
                <DigitalIcon />
              </span>
              <h2 className="text-3xl font-bold text-[#023047]">Digital & Crew Solutions</h2>
            </div>
            <div className="space-y-4">
              {digitalServices.map((item) => (
                <FeatureListItem key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* --- Section 2: 4-Column Pioneering Training --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {trainingData.map((item) => (
            <TrainingCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              color={item.color}
              bg={item.bg}
              hoverBg={item.hoverBg}
              // 🟡 FIXED: Removed the 'highlighted' prop
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatSetsUsApart;