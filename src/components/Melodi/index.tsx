import React from "react";

const Melodi = () => {
    return (
        <div className="p-8 bg-white text-gray-800">
            <h1 className="font-poppins text-4xl text-center mb-4">Melodikrysset</h1>
            <div className="text-center mb-8">
                <p className="mb-4">Together, we play Melodikrysset. Every Saturday, Reco's doors open at 8:30 AM. You buy a crossword breakfast and sit down in the restaurant. You receive a pen and a crossword to fill in. At 10:03 AM, the speakers welcome us to Sveriges Radio’s Melodikrysset. After an hour of solving the crossword, we gather all the competition entries and send them in for the prize draw.</p>
                <p className="mb-4">A peaceful and pleasant way to start the weekend together. No table reservations; it's drop-in only.</p>
                <p>Welcome!</p>
            </div>
            <div className="flex justify-center gap-4">
                <img src="path/to/image1.jpg" alt="Melodikrysset breakfast" className="w-1/3 h-auto rounded-md" />
                <img src="path/to/image2.jpg" alt="Melodikrysset participants" className="w-1/3 h-auto rounded-md" />
                <img src="path/to/image3.jpg" alt="Melodikrysset tray" className="w-1/3 h-auto rounded-md" />
            </div>
        </div>
    );
};

export default Melodi;
