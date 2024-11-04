import Link from "next/link";
import Melodi from "../Melodi";

const Opening = () => {
    return (
        <>
        
        <div className="max-w-full mx-auto p-10 m-10 flex justify-between bg-[#004aad]">
            <div className="flex flex-col w-1/2 p-4">
                <header className="flex flex-col border-b border-[#ff3130] pb-3 mb-3">
                    <h1 className="text-[#ff3130] text-3xl font-serif font-bold text-center mb-2 tracking-wide">
                        New Fall Opening Hours 🍂
                    </h1>
                    <p className="text-center text-md text-[#FEFEFC] italic">We're excited to serve you!</p>
                </header>
                
                <div className="flex flex-col text-center font-serif text-lg">
                    <p className="text-[#ff3130] font-bold border-[#FFD7B5] py-3">Monday - CLOSED</p>
                    <p className="text-[#FEFEFC] border-[#FFD7B5] py-2">Tues - Thurs: 11 AM - 6 PM</p>
                    <p className="text-[#FEFEFC] border-[#FFD7B5] py-2">Friday: 10 AM - 5 PM</p>
                    <p className="text-[#FEFEFC] border-[#FFD7B5] py-2">Saturday: 9 AM - 5 PM</p>
                    <p className="text-[#FEFEFC] py-2">Sunday: 9 AM - 6 PM</p>
                    <Link href="/menu">
                        <button className="text-[#FEFEFC] m-8 text-2xl font-poppins transition-transform duration-300 transform hover:scale-110 bg-[#ff3130] hover:bg-[#ff3130] rounded-lg shadow-lg p-2">
                            Check Out the Menu!
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 p-4">
                <p className="font-poppins text-[#FEFEFC] text-center mb-2">You can find us here:</p>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.1911096014876!2d18.079019499999998!3d59.313065699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f7587900a3%3A0xc571e2c887854a10!2sBondegatan%2013%2C%20116%2023%20Stockholm!5e0!3m2!1ssv!2sse!4v1730559062483!5m2!1ssv!2sse" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <Melodi />
        </>
    );
}

export default Opening;
