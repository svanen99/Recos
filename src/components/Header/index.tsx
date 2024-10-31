import Image from "next/image";
import Link from "next/link";
import Navigation from "../Navigation";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#800020] to-[#b30037] text-white flex justify-between items-center p-4 shadow-lg sticky top-0 z-50">
            <Link href="/" className="flex flex-col items-center">
                <Image 
                    src="/images/logo.webp" 
                    width={250} 
                    height={220} 
                    alt="logo"
                    className="hover:scale-200 hover:animate-pulse transition-transform duration-300 slide-down" 
                />
            </Link>
            <nav className="text-lg">
                <Navigation />  {/* Navigation kallas här */}
            </nav>
        </header>
    );
};

export default Header;
