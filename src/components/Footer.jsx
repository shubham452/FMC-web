import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#023047] text-[#BECAE6]/80 pt-10 pb-10" id="footer">
            <div className="container mx-auto px-6">
                
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Column 1 */}
                    <div>
                        <img 
                            src={logo}
                            alt="Fathom Marine Logo" 
                            className="h-20 w-auto mb-3" 
                        />
                        <h2 className="text-lg md:text-xl font-bold text-[#FFB703] leading-snug">
                            Fathom Marine Consultants Pvt Ltd.
                        </h2>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                            Address
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed">
                            Fathom Marine Consultants - Ghatkopar Branch,
                            <br />
                            Hiranandani Gardens, Powai,
                            <br />
                            Mumbai, Maharashtra 400076
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                            Contact
                        </h3>
                        <div className="space-y-3 text-sm md:text-base">

                            <ul className="space-y-1.5">
                                <li>
                                    <strong>India:</strong>
                                    <a href="tel:+919136936173" className="block hover:text-[#FFB703]">
                                        +91 9136936173
                                    </a>
                                </li>
                                <li>
                                    <strong>Netherlands:</strong>
                                    <a href="tel:+31658977212" className="block hover:text-[#FFB703]">
                                        +31 658977212
                                    </a>
                                </li>
                                <li>
                                    <strong>UK:</strong>
                                    <a href="tel:+447473819363" className="block hover:text-[#FFB703]">
                                        +44 7473 819363
                                    </a>
                                </li>
                                <li>
                                    <strong>Singapore</strong>
                                    
                                </li>
                            </ul>

                            {/* Email */}
                            <h4 className="font-semibold text-white pt-1 text-sm md:text-base">
                                Email
                            </h4>
                            <a 
                                href="mailto:contact@fathommarineconsultants.com" 
                                className="hover:text-[#FFB703] break-all text-sm md:text-base"
                            >
                                contact@fathommarineconsultants.com
                            </a>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                            Useful Link
                        </h3>
                        <a 
                            href='https://www.manomaxacademy.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm md:text-base text-[#BECAE6] font-medium hover:text-[#FFB703] hover:underline"
                        >
                            MANOMAX ACADEMY by FATHOM MARINE CONSULTANTS
                        </a>
                    </div>
                    
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-[#BECAE6]/20 pt-6 text-center">
                    <p className="text-sm md:text-base">
                        © {new Date().getFullYear()} Fathom Marine Consultants Pvt Ltd. All rights reserved.
                    </p>
                </div>

            </div> 
        </footer>
    );
};

export default Footer;
