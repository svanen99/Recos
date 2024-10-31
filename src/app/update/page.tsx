import Header from "@/components/Header";

const Update = () => {
    return (
        <>
            <Header />
            <div className="bg-[#f4f4f4] text-[#2E2E2E] px-6 py-12 md:px-16 lg:px-24 font-serif m-6 rounded-lg shadow-lg border border-gray-300">
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
                    <h1 className="text-4xl font-bold text-center mb-4 text-[#1A1A1A]">
                        Update!
                    </h1>
                    <p className="text-center text-xl font-semibold text-[#333333]">
                        Hej everyone! Here’s a quick update for our loyal supporters.
                    </p>
                    <p className="text-justify">
                        I posted a week ago regarding this issue on IG. So, as you all know, I'm a guy with a dream to open this startup restaurant. The following and feedback has been 
                        <span className="font-extrabold text-[#1A1A1A]"> UNBELIEVABLY supportive</span>, and I love <span className="italic font-semibold">EVERYONE</span> that has eaten at my spot! 😊
                    </p>
                    <p className="text-justify">
                        As mentioned, I currently collaborate with the owners at our location, which explains the early closing times and no alcohol license. It's not ideal, but to start my dream, I had to agree to these terms. 🙏
                    </p>
                    <p className="text-justify">
                        Now, I'm actively searching for a new location that I can call my own. Ideally, I would like to stay central, but I'm open to a high-traffic area a bit further out. If anyone knows of a great spot or has connections, <span className="font-semibold text-[#333333]">PLEASE</span> let me know!
                    </p>
                    <p className="text-2xl font-bold text-center mt-8 text-[#1A1A1A]">
                        THANK YOU ALL FOR YOUR SUPPORT AND UNDERSTANDING! ❤️
                    </p>
                </div>
            </div>
        </>
    );
}

export default Update;
