import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#004aad] text-[#FEFEFC] py-10 mt-16 border-t-8 border-[#ff3130] font-poppins">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col mb-6">
                        <h2 className="text-lg font-bold mb-4 text-[#ff3130]">Contact Us</h2>
                        <p className="mb-1">Address: Bondegatan 13, 11623 Stockholm</p>
                        <p className="mb-1">
                            Phone: 
                            <a 
                                href="tel:08 640 02 71" 
                                className="text-[#FEFEFC] ml-1 hover:underline flex items-center transition-all duration-300"
                            >
                                <FaPhone className="mr-1" /> 08 - 640 02 71
                            </a>
                        </p>
                        <p className="mb-1">
                            Email: 
                            <a 
                                href="mailto:info@recoschickenandwaffles.com" 
                                className="hover:underline transition-all duration-300 text-[#FEFEFC] flex items-center"
                            >
                                <FaEnvelope className="mr-1" /> info@recoschickenandwaffles.com
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start mb-6">
                        <h2 className="text-lg font-bold mb-4 text-[#ff3130]">Follow Us</h2>
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <a 
                                href="https://www.instagram.com/recoscnw/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#FEFEFC] hover:text-[#ff3130] transition duration-300 flex items-center justify-center"
                            >
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end mb-6">
                        <Image src="/images/logo.webp" width={300} height={200} alt="Reco's Logo" className="" />
                    </div>
                </div>
                <div className="mt-6 text-sm text-center border-t border-[#ff3130] pt-4">
                    <p>© 2024 Reco's Chicken and Waffles. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
