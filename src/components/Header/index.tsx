import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation";
import { FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-[#f4f4f4] text-black py-8 shadow-md w-full border-b border-gray-300">
            <div className="flex flex-col items-center mb-6 border-b border-gray-300 pb-4">
                <Link href="/">
                    <Image 
                        src="/images/logo.webp" 
                        width={230} 
                        height={130} 
                        alt="logo"
                        className="hover:scale-110 transition-transform duration-300 bg-[#004aad] rounded-full shadow-md border-2 border-gray-300 p-2" 
                    />
                </Link>
                <h1 className="text-5xl font-serif font-bold mt-4 mb-1 text-[#3E2723]">Chicken & Waffles</h1>
                <p className="text-lg font-sans italic text-[#3E2723]">Yes, they do go together...</p>
                <p className="text-md font-sans text-[#3E2723] mt-1">Reco's Chicken & Waffles, Bondegatan 13, 11623 Stockholm</p>
            </div>
            
            <nav className="w-full">
                <Navigation />
            </nav>
        </header>
    );
};

export default Header;
