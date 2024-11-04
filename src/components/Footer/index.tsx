import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#ff3130] text-[#FEFEFC] py-10 mt-16 border-t border-gray-300 font-serif">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-lg font-semibold mb-4 border-b-2 border-[#004aad] pb-2">Contact Us</h2>
                        <p className="mb-1">Address: Bondegatan 13, 11623 Stockholm</p>
                        <p className="mb-1">
                            Phone: 
                            <a href="tel:08 640 02 71" className="text-[#FEFEFC] ml-1 hover:underline">
                                08 - 640 02 71 <FaPhone className="inline-block ml-1" />
                            </a>
                        </p>
                        <a 
                            href="mailto:info@recoschickenandwaffles.com" 
                            className="hover:underline transition-all duration-300 text-[#FEFEFC]"
                        >
                            Email: info@recoschickenandwaffles.com
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-start">

                        <h2 className="text-lg font-semibold mb-4 border-b-2 border-[#004aad] pb-2">Follow Us</h2>
                        <div className="flex justify-center md:justify-start gap-4 mt-4">
                            <a 
                                href="https://www.instagram.com/recoscnw/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#FEFEFC] hover:text-[#004aad] transition duration-300"
                            >
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 text-sm md:mt-0 md:flex md:items-center justify-center">
                        <p>© 2024 Reco's Chicken and Waffles. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
