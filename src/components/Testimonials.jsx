import React from 'react';

// NEW: Data updated from your 'image_673fbd.png' file
const testimonialData = [
    {
        id: 1,
        name: "CAPT SARNBIR S SAWHNEY",
        title: "PROJECT MANAGER-LNG TRANSITION AT SEASPAN SHIP MANAGEMENT LTD.",
        quote: "Exceptionally well-executed and undoubtedly one of the most outstanding training programs participated in throughout my entire sailing.",
        stars: 5,
    },
    {
        id: 2,
        name: "JAGMOHAN SINGH",
        title: "TECHNICAL SUPPORT & SOFTWARE IMPLEMENTATION MANAGER",
        quote: "Augmented Reality Experience – ITS REAL !!",
        stars: 5,
    },
    {
        id: 3,
        name: "CAPT. AMIT JOSHI",
        title: "CHIEF OPERATING OFFICER & STRATEGIC BUSINESS PARTNER AT CONFIDENCE SHIPPING CO PVT LTD.",
        quote: "best training I have attended so far in my whole career.",
        stars: 5,
    },
];

// Helper component for star ratings
const StarRating = ({ count }) => {
    return (
        <div className="flex justify-center space-x-1 text-[#FFB703]">
            {/* Creates an array of 'count' items and maps them to a star icon */}
            {[...Array(count)].map((_, index) => (
                <span key={index} className="text-2xl">★</span>
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        // Main section container (styling from the first image)
        <section 
            className="bg-[#023047]/95 backdrop-blur-sm py-16 sm:py-24" 
            id="testimonials"
        >
            <div className="container mx-auto px-6 text-center">
                
                {/* Heading */}
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    What Our Customers Say
                </h1>
                <p className="mt-4 text-lg leading-8 text-[#BECAE6]/80 max-w-2xl mx-auto">
                    Discover what our satisfied customers have to say 
                    about their experiences with our services.
                </p>

                {/* Testimonial Cards Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData.map((testimonial) => (
                        <div 
                            key={testimonial.id}
                            // Card styling (glassmorphism from first image)
                            className="
                                bg-[#BECAE6]/10 border border-[#BECAE6]/20 
                                rounded-xl p-8 shadow-xl backdrop-blur-md 
                                flex flex-col items-center text-center
                            "
                        >
                            {/* REPLACED: Image is now StarRating */}
                            <StarRating count={testimonial.stars} />

                            <p className="mt-6 text-base leading-6 text-white italic min-h-[100px]">
                                "{testimonial.quote}"
                            </p>
                            
                            <div className="mt-6">
                                {/* Name uses Yellow accent */}
                                <p className="font-semibold text-lg text-[#FFB703] uppercase">
                                    {testimonial.name}
                                </p>
                                {/* Title uses Sky Blue at 90% opacity */}
                                <p className="text-sm text-[#BECAE6]/90 uppercase mt-2">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;