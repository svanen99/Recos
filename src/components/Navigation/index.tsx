'use client'
import Link from "next/link";
import { FaHome, FaInfoCircle, FaDollarSign, FaEnvelope, FaEdit, FaHandPaper, FaList, FaListAlt } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { CiForkAndKnife } from "react-icons/ci";

const Navigation = () => {
    const pathname = usePathname();

    return (
        <ul className="flex w-full font-sans justify-between bg-[#FEFEFC] p-4 divide-x divide-[#ff3130] rounded-lg mx-auto max-w-4xl">
            <li className="w-1/5 text-center">
                <Link 
                    href="/" 
                    className={`flex items-center justify-center font-bold py-3 px-4 rounded-lg transition-all duration-300 transform ${
                        pathname === '/' ? 'text-[#ff3130]' : 'text-[#004aad]'
                    } hover:text-[#ff3130]`}
                >
                    <FaHome className="mr-2 transform hover:scale-110" /> HOME
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/menu" 
                    className={`flex items-center justify-center font-bold py-3 px-4 rounded-lg transition-all duration-300 transform ${
                        pathname === '/menu' ? 'text-[#ff3130]' : 'text-[#004aad]'
                    } hover:text-[#ff3130]`}
                >
                    <CiForkAndKnife className="mr-2 transform hover:scale-110" /> MENU
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/prices" 
                    className={`flex items-center justify-center font-bold py-3 px-4 rounded-lg transition-all duration-300 transform ${
                        pathname === '/prices' ? 'text-[#ff3130]' : 'text-[#004aad]'
                    } hover:text-[#ff3130]`}
                >
                    <FaDollarSign className="mr-2 transform hover:scale-110" /> PRICES
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/about" 
                    className={`flex items-center justify-center font-bold py-3 px-4 rounded-lg transition-all duration-300 transform ${
                        pathname === '/about' ? 'text-[#ff3130]' : 'text-[#004aad]'
                    } hover:text-[#ff3130]`}
                >
                    <FaInfoCircle className="mr-2 transform hover:scale-110" /> ABOUT
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/contact" 
                    className={`flex items-center justify-center font-bold py-3 px-4 rounded-lg transition-all duration-300 transform ${
                        pathname === '/contact' ? 'text-[#ff3130]' : 'text-[#004aad]'
                    } hover:text-[#ff3130]`}
                >
                    <FaEnvelope className="mr-2 transform hover:scale-110" /> CONTACT
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/update" 
                    className={`flex items-center justify-center font-bold py-3 px-4 rounded-lg transition-all duration-300 transform ${
                        pathname === '/update' ? 'text-[#ff3130]' : 'text-[#004aad]'
                    } hover:text-[#ff3130]`}
                >
                    <FaEdit className="mr-2 transform hover:scale-110" /> UPDATE
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;
