import Header from "@/components/Header";

const update = () => {
    return (
        <>
            <Header />
            <div className="bg-[#FFF7ED] text-[#4E342E] px-8 py-12 md:px-16 lg:px-24 font-poppins m-6 rounded-lg shadow-lg">
                <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
                    <h1 className="text-4xl font-extrabold text-center text-[#D84315] mb-2">
                        Update!
                    </h1>
                    <p className="text-center text-lg font-semibold text-[#BF360C]">
                        Hej everyone! Here’s a quick update for our loyal supporters.
                    </p>
                    <p className="text-justify text-lg">
                        I posted a week ago regarding this issue on IG. So, as you all know, I'm a guy with a dream to open this startup restaurant. The following and feedback has been 
                        <span className="font-extrabold text-[#D84315]"> UNBELIEVABLY supportive</span>, and I love <span className="italic font-semibold">EVERYONE</span> that has eaten at my spot! 😊
                    </p>
                    <p className="text-justify">
                        As mentioned, I currently collaborate with the owners at our location, which explains the early closing times and no alcohol license. It's not ideal, but to start my dream, I had to agree to these terms. 🙏
                    </p>
                    <p className="text-justify">
                        Now, I'm actively searching for a new location that I can call my own. Ideally, I would like to stay central, but I'm open to a high-traffic area a bit further out. If anyone knows of a great spot or has connections, <span className="font-semibold text-[#BF360C]">PLEASE</span> let me know!
                    </p>
                    <p className="text-2xl font-semibold text-center mt-6 text-[#D84315]">
                        THANK YOU ALL FOR YOUR SUPPORT AND UNDERSTANDING! ❤️
                    </p>
                </div>
            </div>
        </>
    );
}

export default update;

// Temporarily simplified Update component
// const update = () => {
//     return (
//         <>
//         <Header />
//         <div className="bg-[#F4F1DE] text-[#3E2723] px-6 py-10">
//             <h1 className="text-3xl font-bold text-center">Update!</h1>
//             <p>This is a simplified component to check for call stack errors.</p>
//         </div>
//         </>
//     );
// }

// export default update;

