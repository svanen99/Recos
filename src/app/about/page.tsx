import Header from "@/components/Header";

const About = () => {
    return (
        <>
            <Header />
            <div className="bg-[#F4F1DE] text-[#3E2723] px-6 py-12 md:px-16 lg:px-24 font-poppins">
                <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
                    <h1 className="text-4xl font-bold text-center">Welcome to Reco's Chicken and Waffles!</h1>
                    <p className="text-center text-xl font-medium mb-4">Your new favorite American all-day brunch spot in the heart of Stockholm!</p>
                    {/* <img src="/images/welcome-banner.jpg" alt="Delicious Chicken and Waffles" className="w-full rounded-lg shadow-lg mb-6" /> */}
                    <p>
                        We are proud to bring a slice of American comfort and culinary traditions to the local area, offering a unique dining experience that stands out from the crowd.
                    </p>
                    <p>
                        My journey to founding Reco's Chicken and Waffles has been nothing short of an adventure. Coming from Alabama, living all across America, and being a military brat to eventually becoming a professional basketball player in Europe has given me the incredible opportunity to live in 10 different countries around the world.
                    </p>
                    <p>
                        It was extremely enlightening to immerse myself in other diverse cultures, traditions, and cuisines. However, amidst all these wonderful experiences, there was always something I deeply missed - the comforting taste of American Southern cooking. This longing for a taste of home was the spark that ignited my entrepreneurial spirit and led me to start Reco's Chicken and Waffles here in Sweden.
                    </p>
                    <p>
                        My mission is simple yet profound: To create not just a restaurant but a community where people can gather, share stories, and enjoy the delicious, soul-satisfying flavors of American Southern cuisine right here in Sweden. It gives me joy to bring a little piece of home to Americans living abroad and offer a new culinary adventure for Swedes, sharing the warmth, joy, and unifying power of good food.
                    </p>
                    <p className="text-xl font-semibold text-center mt-4">Welcome home.</p>
                </div>
            </div>
        </>
    );
}

export default About;
