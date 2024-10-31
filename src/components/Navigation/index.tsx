import Link from "next/link";
import { FaHome, FaInfoCircle, FaDollarSign, FaEnvelope, FaEdit } from 'react-icons/fa';

const Navigation = () => {
    return (
        <ul className="text-lg flex space-x-6 font-poppins">
            <li className="transition-transform transform hover:scale-110">
                <Link href="/" className="flex items-center hover:text-[#FF7F3F] transition-colors duration-300">
                    <FaHome className="mr-1" /> Home
                </Link>
            </li>
            <li className="transition-transform transform hover:scale-110">
                <Link href="/about" className="flex items-center hover:text-[#FF7F3F] transition-colors duration-300">
                    <FaInfoCircle className="mr-1" /> About
                </Link>
            </li>
            <li className="transition-transform transform hover:scale-110">
                <Link href="/prices" className="flex items-center hover:text-[#FF7F3F] transition-colors duration-300">
                    <FaDollarSign className="mr-1" /> Prices
                </Link>
            </li>
            <li className="transition-transform transform hover:scale-110">
                <Link href="/contact" className="flex items-center hover:text-[#FF7F3F] transition-colors duration-300">
                    <FaEnvelope className="mr-1" /> Contact
                </Link>
            </li>
            <li className="transition-transform transform hover:scale-110">
                <Link href="/update" className="flex items-center hover:text-[#FF7F3F] transition-colors duration-300">
                    <FaEdit className="mr-1" /> Update
                </Link>
            </li>
        </ul>
    );
};

export default Navigation;
