import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Prices = () => {
    return (
        <>
            <Header />
            <div className="relative bg-[#004aad] text-[#FEFEFC] py-12 px-6 md:px-16 lg:px-24 font-poppins overflow-hidden">
                <img src="/images/waff.png" alt="Waffle" className="absolute top-18 left-5 w-20 opacity-75" />
                <img src="/images/waffleone.png" alt="Waffle" className="absolute top-80 right-1/4 w-20 opacity-75" />
                <img src="/images/fried.png" alt="Fried" className="absolute top-20 right-10 w-20 opacity-75" />
                <img src="/images/bace.png" alt="Waffle" className="absolute top-30 left-1/4 w-16 opacity-85" />
                <img src="/images/fried-chicken.png" alt="Fried Chicken" className="absolute top-80 left-10 w-16 opacity-75" />
                <img src="/images/waff.png" alt="Mac and Cheese" className="absolute bottom-40 left-2/4 w-16 opacity-75" />
                <img src="/images/bace.png" alt="Waffle" className="absolute bottom-20 left-3/4 w-16 opacity-85" />
                <img src="/images/macncheese.png" alt="Waffle" className="absolute bottom-60 right-10 w-20 opacity-75" />
                <img src="/images/bace.png" alt="Waffle" className="absolute top-1/2 right-1/2 w-20 opacity-85" />
                <img src="/images/fried.png" alt="Fried" className="absolute bottom-1/3 left-10 w-20 opacity-75" />



                <h1 className="text-5xl font-bold text-center mb-8">Prices</h1>
                <div className="max-w-4xl mx-auto space-y-10">
                    <div>
                        <h2 className="text-3xl font-semibold border-b-2 border-[#ff3130] pb-2 mb-4">Foods</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Chicken & Belgian Waffles 140kr</li>
                            <li>Fried Chicken (original or spicy) 35kr/each</li>
                            <li>Chicken Tenders (3 pieces) 75kr</li>
                            <li>American Pancakes 70kr</li>
                            <li>Belgian Waffles 75kr</li>
                            <li>Swedish Waffles 65kr</li>
                            <li>Vegan Waffles 70kr</li>
                            <li>Fried Chicken Salad 140kr</li>
                            <li>Macaroni & Cheese 50kr</li>
                            <li>Deep Fried Cauliflower 70kr</li>
                            <li>Scrambled Eggs 50kr</li>
                            <li>Cornbread 45kr</li>
                            <li>Alabama Cream Corn 45kr</li>
                            <li>Eggs & Toast 75kr</li>
                            <li>Small Salad 40kr</li>
                            <li>Bacon 35kr</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold border-b-2 border-[#ff3130] pb-2 mb-4 animate-fade-in">Drinks</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Cola, Fanta, Sprite, Ramlösa 25kr</li>
                            <li>Brewed Coffee, Espresso 35kr</li>
                            <li>Cappuccino, Latte 40kr</li>
                            <li>Juice (Orange, Apple) 30kr</li>
                            <li>Festis 25kr</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold border-b-2 border-[#ff3130] pb-2 mb-4">Extra Toppings & Sauces - All 20kr</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Maple Syrup</li>
                            <li>Jam / Sylt</li>
                            <li>Chocolate Sauce</li>
                            <li>Ice Cream</li>
                            <li>Whipped Cream</li>
                            <li>Berries (Raspberries, Blueberries)</li>
                            <li>Sweet and Spicy BBQ Sauce</li>
                            <li>Ranch</li>
                            <li>Hot Sauce</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Prices;