'use client'
import Link from "next/link";
import { FaBars, FaHome, FaInfoCircle, FaDollarSign, FaEnvelope, FaEdit } from 'react-icons/fa';
import { CiForkAndKnife } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Hamburger button aligned to the right */}
            <div className="flex justify-end md:hidden">
                <button onClick={toggleMenu} className="p-2 focus:outline-none">
                    <FaBars className="text-[#004aad] text-2xl" />
                </button>
            </div>
            
            {/* Navigation menu */}
            <ul className={`md:flex ${isOpen ? "block" : "hidden"} md:block bg-[#FEFEFC] p-4 divide-y md:divide-x md:divide-y-0 divide-[#ff3130] rounded-lg`}>
                <li className="md:w-1/5 text-center my-2 md:my-0">
                    <Link 
                        href="/" 
                        className={`flex items-center justify-center font-bold py-2 px-4 rounded-lg transition-all duration-300 transform ${
                            pathname === '/' ? 'text-[#ff3130]' : 'text-[#004aad]'
                        } hover:text-[#ff3130]`}
                    >
                        <FaHome className="mr-2" /> HOME
                    </Link>
                </li>
                <li className="md:w-1/5 text-center my-2 md:my-0">
                    <Link 
                        href="/menu" 
                        className={`flex items-center justify-center font-bold py-2 px-4 rounded-lg transition-all duration-300 transform ${
                            pathname === '/menu' ? 'text-[#ff3130]' : 'text-[#004aad]'
                        } hover:text-[#ff3130]`}
                    >
                        <CiForkAndKnife className="mr-2" /> MENU
                    </Link>
                </li>
                <li className="md:w-1/5 text-center my-2 md:my-0">
                    <Link 
                        href="/prices" 
                        className={`flex items-center justify-center font-bold py-2 px-4 rounded-lg transition-all duration-300 transform ${
                            pathname === '/prices' ? 'text-[#ff3130]' : 'text-[#004aad]'
                        } hover:text-[#ff3130]`}
                    >
                        <FaDollarSign className="mr-2" /> PRICES
                    </Link>
                </li>
                <li className="md:w-1/5 text-center my-2 md:my-0">
                    <Link 
                        href="/about" 
                        className={`flex items-center justify-center font-bold py-2 px-4 rounded-lg transition-all duration-300 transform ${
                            pathname === '/about' ? 'text-[#ff3130]' : 'text-[#004aad]'
                        } hover:text-[#ff3130]`}
                    >
                        <FaInfoCircle className="mr-2" /> ABOUT
                    </Link>
                </li>
                <li className="md:w-1/5 text-center my-2 md:my-0">
                    <Link 
                        href="/contact" 
                        className={`flex items-center justify-center font-bold py-2 px-4 rounded-lg transition-all duration-300 transform ${
                            pathname === '/contact' ? 'text-[#ff3130]' : 'text-[#004aad]'
                        } hover:text-[#ff3130]`}
                    >
                        <FaEnvelope className="mr-2" /> CONTACT
                    </Link>
                </li>
                <li className="md:w-1/5 text-center my-2 md:my-0">
                    <Link 
                        href="/update" 
                        className={`flex items-center justify-center font-bold py-2 px-4 rounded-lg transition-all duration-300 transform ${
                            pathname === '/update' ? 'text-[#ff3130]' : 'text-[#004aad]'
                        } hover:text-[#ff3130]`}
                    >
                        <FaEdit className="mr-2" /> UPDATE
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
