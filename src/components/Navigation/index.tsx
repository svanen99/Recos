'use client';
import Link from "next/link";
import { FaHome, FaInfoCircle, FaDollarSign, FaEnvelope, FaEdit } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const pathname = usePathname();

    return (
        <ul className="flex w-full font-sans justify-between bg-[#f4f4f4] p-2 border-t border-b border-gray-300 divide-x divide-gray-300">
            <li className="w-1/5 text-center">
                <Link 
                    href="/" 
                    className={`flex items-center justify-center font-bold py-2 ${
                        pathname === '/' ? 'text-[#3E2723]' : 'text-gray-700'
                    } transition-transform duration-300 transform hover:text-blue-700`}
                >
                    <FaHome className="mr-1" /> HOME
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/prices" 
                    className={`flex items-center justify-center font-bold py-2 ${
                        pathname === '/prices' ? 'text-black' : 'text-gray-700'
                    } transition-transform duration-300 transform hover:text-black`}
                >
                    <FaDollarSign className="mr-1" /> PRICES
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/about" 
                    className={`flex items-center justify-center font-bold py-2 ${
                        pathname === '/about' ? 'text-black' : 'text-gray-700'
                    } transition-transform duration-300 transform hover:text-black`}
                >
                    <FaInfoCircle className="mr-1" /> ABOUT
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/contact" 
                    className={`flex items-center justify-center font-bold py-2 ${
                        pathname === '/contact' ? 'text-black' : 'text-gray-700'
                    } transition-transform duration-300 transform hover:text-black`}
                >
                    <FaEnvelope className="mr-1" /> CONTACT
                </Link>
            </li>
            <li className="w-1/5 text-center">
                <Link 
                    href="/update" 
                    className={`flex items-center justify-center font-bold py-2 ${
                        pathname === '/update' ? 'text-black' : 'text-gray-700'
                    } transition-transform duration-300 transform hover:text-black`}
                >
                    <FaEdit className="mr-1" /> UPDATE
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;
