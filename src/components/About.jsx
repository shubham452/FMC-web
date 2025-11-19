import React from 'react';

// Icon components (Unchanged)
const SloganIcon = () => (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.25 10.125c0 .967.624 1.792 1.5 2.162.877.37 1.502.998 1.502 1.961 0 1.285-1.042 2.322-2.328 2.322s-2.328-1.037-2.328-2.322c0-.528.21-1.01.548-1.372.338-.362.548.86.548-1.396 0-.967-.624-1.792-1.5-2.162-.877.37-1.502-.998-1.502-1.961 0-1.285 1.042 2.322 2.328 2.322s2.328 1.037 2.328 2.322c0 .528-.21 1.01.548 1.372-.338-.362-.548.86-.548 1.396ZM12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Z" />
    </svg>
);
const CoreValuesIcon = () => (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM15.75 15.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 15.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM8.25 15.75a3 3 0 1 1 7.5 0 3 3 0 0 1-7.5 0Z" clipRule="evenodd" />
    </svg>
);
const ExpertiseIcon = () => (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.7 2.003a.75.75 0 0 1 .6 0l2.668 1.334a.75.75 0 0 1 0 1.33L12.3 6.001a.75.75 0 0 1-.6 0l-2.668-1.334a.75.75 0 0 1 0-1.33L11.7 2.003ZM11.7 7.503a.75.75 0 0 1 .6 0l2.668 1.334a.75.75 0 0 1 0 1.33L12.3 11.501a.75.75 0 0 1-.6 0l-2.668-1.334a.75.75 0 0 1 0-1.33L11.7 7.503ZM11.7 13.003a.75.75 0 0 1 .6 0l2.668 1.334a.75.75 0 0 1 0 1.33L12.3 17.001a.75.75 0 0 1-.6 0l-2.668-1.334a.75.75 0 0 1 0-1.33L11.7 13.003Z" />
        <path d="M17.86 6.39A.75.75 0 0 1 17.25 6h-2.16l.488 2.441a.75.75 0 0 1-1.476.294l-.488-2.441h-1.028a.75.75 0 0 1 0-1.5h1.028l.488-2.441a.75.75 0 0 1 1.476-.294l-.488 2.441h2.16a.75.75 0 0 1 .61.39Z" />
        <path d="M21.241 12.39a.75.75 0 0 1-.61-.39l-1.06-2.12h-2.16l.488 2.441a.75.75 0 1 1-1.476.294l-.488-2.441h-1.028a.75.75 0 0 1 0-1.5h1.028l.488-2.441a.75.75 0 0 1 1.476-.294l-.488 2.441h2.16l1.06-2.12a.75.75 0 1 1 1.32.66l-1.06 2.12h.79a.75.75 0 0 1 0 1.5h-.79l1.06 2.12a.75.75 0 0 1-.71 1.11Z" />
        <path d="M17.86 17.39a.75.75 0 0 1-.61-.39l-1.06-2.12h-2.16l.488 2.441a.75.75 0 1 1-1.476.294l-.488-2.441h-1.028a.75.75 0 0 1 0-1.5h1.028l.488-2.441a.75.75 0 0 1 1.476-.294l-.488 2.441h2.16l1.06-2.12a.75.75 0 1 1 1.32.66l-1.06 2.12h.79a.75.75 0 0 1 0 1.5h-.79l1.06 2.12a.75.75 0 0 1-.71 1.11Z" />
    </svg>
);
const GlobalReachIcon = () => (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.926 0 1.75 1.75 0 0 0-.917 1.616c-.002.58.125 1.14.368 1.649l.056.112A9.75 9.75 0 0 0 3.2 12.016a.75.75 0 0 0 0 1.5c4.309 0 7.825 3.516 7.825 7.825a.75.75 0 0 0 1.5 0c0-4.309 3.516-7.825 7.825-7.825a.75.75 0 0 0 0-1.5A9.75 9.75 0 0 0 13.5 5.663l.056-.112a2.91 2.91 0 0 0 .368-1.649 1.75 1.75 0 0 0-.917-1.616Z" clipRule="evenodd" />
    </svg>
);

const About = () => {
    return (
        // Changed to white background as the cards are now white
        <div className="bg-gray-50 py-16 sm:py-24" id="about">
            <div className="container mx-auto px-6">
                
                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                     <h1 className="text-4xl font-bold tracking-tight text-[#023047] sm:text-5xl">
                        About Fathom Marine
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[#023047]/80">
                        We are a team of Masters, Ex-Chief Engineers, and Strategic
                        Partnerships in the industry. We aim to equip our customers
                        with environmentally safe and cost-effective solutions
                        based on innovation and performance.
                    </p>
                </div>

                {/* RESTYLED: 3-column grid for the cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Core Values */}
                    <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                        {/* Faded Number */}
                        <div className="absolute -top-2 right-4 text-8xl font-bold text-gray-100/80 z-0">01</div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="flex-shrink-0 mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#219EBC] bg-[#219EBC]/10">
                                <CoreValuesIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-[#023047]">Our Core Values</h2>
                            <p className="mt-2 text-base text-[#023047]/80">
                                Responsible. Excellence. Co-create.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Team Expertise */}
                    <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                        {/* Faded Number */}
                        <div className="absolute -top-2 right-4 text-8xl font-bold text-gray-100/80 z-0">02</div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="flex-shrink-0 mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#FFB703] bg-[#FFB703]/10">
                                <ExpertiseIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-[#023047]">Team Expertise</h2>
                            <p className="mt-2 text-base text-[#023047]/80">
                                Talent Pool with &gt;200 Years Experience.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Global Reach */}
                    <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                        {/* Faded Number */}
                        <div className="absolute -top-2 right-4 text-8xl font-bold text-gray-100/80 z-0">03</div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="flex-shrink-0 mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg text-[#167B7B] bg-[#167B7B]/10">
                                <GlobalReachIcon />
                            </div>
                            <h2 className="text-xl font-semibold text-[#023047]">Global Reach</h2>
                            <p className="mt-2 text-base text-[#023047]/80">
                                Testified with 400+ Crew Across the Globe
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;