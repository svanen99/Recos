import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#800020] text-white py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h2 className="text-lg font-semibold mb-4 border-b-2 border-white pb-2">Contact Us</h2>
                        <p className="mb-1">Address: Bondegatan 13, 11623 Stockholm</p>
                        <p className="mb-1">Phone: 08 - 640 02 71</p>
                        <a 
                            href="mailto:info@recoschickenandwaffles.com" 
                            className="mb-1 hover:underline transition-all duration-300"
                        >
                            Email: info@recoschickenandwaffles.com
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-4 border-b-2 border-white pb-2">Follow Us</h2>
                        <div className="flex justify-center gap-4 mt-4">
                            <a 
                                href="https://www.instagram.com/recoscnw/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-[#FF7F3F] transition duration-300"
                            >
                                <FaInstagram size={28} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 text-sm text-center justify-center">
                        <p>© 2024 Reco's Chicken and Waffles. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
