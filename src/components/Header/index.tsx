import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation";
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-[#fefdfc] py-4 md:py-6 w-full border-b-4 p-8 md:p-20 border-[#ff3130] rounded relative">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#ff3130] via-[#FEFEFC] to-[#004aad]"></div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6 m-4 md:m-8 pb-4 relative z-10 space-y-4 md:space-y-0">
                <Link href="/">
                    <Image 
                        src="/images/logo.webp" 
                        width={250} 
                        height={60} 
                        alt="logo"
                        className="transition-transform duration-300 transform hover:scale-105 rounded-full bg-[#004aad] border-4 border-[#ff3130] p-2 md:p-4" 
                    />
                </Link>
                <div className="text-center md:text-right">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#ff3130]">Chicken & Waffles</h1>
                    <p className="text-l md:text-lg font-sans italic text-[#004aad] flex justify-center md:justify-end items-center">
                        Yes, they go together... 
                        <Image src="/images/flag.png" width={20} height={20} alt="flag" className="ml-2" />
                    </p>
                    <Link href="https://www.google.com/maps/place/Bondegatan+13,+11623+Stockholm">
                        <p className="text-s md:text-md font-sans text-[#3E2723] mt-1 cursor-pointer hover:text-[#004aad] transition duration-150 ease-in-out hover:underline">
                            Reco's Chicken & Waffles, Bondegatan 13, 11623 Stockholm
                        </p>
                    </Link>
                </div>
            </div>
            <nav className="w-full">
                <Navigation />
            </nav>
        </header>
    );
};

export default Header;
