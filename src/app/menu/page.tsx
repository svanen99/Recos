'use client'
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; 

const menu = () => {
    const menuItems = [
        { src: "/images/american.png", alt: "Dish 1", title: "American Pancakes" },
        { src: "/images/chic-waff.png", alt: "Dish 2", title: "Chicken & Waffle" },
        { src: "/images/swe-waff.png", alt: "Dish 3", title: "Swedish Waffle" },
        { src: "/images/chich-sall.png", alt: "Dish 4", title: "Chicken Sallad" },
        { src: "/images/tenders.png", alt: "Dish 5", title: "Chicken Tenders" },
        { src: "/images/scramble.png", alt: "Dish 6", title: "Eggs & Toast" },
        { src: "/images/mac.png", alt: "Dish 7", title: "Mac & Cheese" },
        { src: "/images/cauli.png", alt: "Dish 8", title: "Deep Fried Cauliflower" },
        { src: "/images/corn.png", alt: "Dish 9", title: "Alabama Cream Corn" },
        { src: "/images/bacon.png", alt: "Dish 10", title: "Bacon" },
        { src: "/images/sirap.png", alt: "Dish 11", title: "Maple Syrup" },
        { src: "/images/bbq.png", alt: "Dish 12", title: "BBQ Sauce" },
        { src: "/images/vin.png", alt: "Dish 13", title: "Vinegrette" },
        { src: "/images/butter.png", alt: "Dish 14", title: "Butter" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (src) => {
        setSelectedImage(src);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                <h2 className="text-4xl font-bold text-center mb-8 m-4 font-poppins text-[#ff3130]">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                            onClick={() => openModal(item.src)}
                        >
                            <Image src={item.src} alt={item.alt} width={400} height={300} className="w-full h-48 object-cover mt-2" />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-poppins font-light">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative">
                        <Image 
                            src={selectedImage} 
                            alt="Large view" 
                            width={800} 
                            height={600} 
                            className="rounded-lg shadow-lg"
                            
                        />
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-white bg-[#004aad] p-4 rounded focus:outline-none hover:bg-[#ff3130]"
                        >
                            <FaTimes size={24} /> 
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default menu;