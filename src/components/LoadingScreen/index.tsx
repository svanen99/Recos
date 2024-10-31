// import { useEffect, useState } from "react";

// const MainContent = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         setTimeout(() => {
//             setIsVisible(true);
//         }, 500); // Fördröjning innan huvudinnehållet visas
//     }, []);

//     return (
//         <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//             <h1 className="text-3xl">Välkommen till Huvudinnehållet!</h1>
//             {/* Lägg till mer innehåll här */}
//         </div>
//     );
// };

// // export default MainContent;