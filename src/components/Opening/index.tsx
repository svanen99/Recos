const Opening = () => {
    return (
        <div className="m-10 p-8 border border-gray-300">
            <header className="flex flex-col items-center border-b border-gray-300 pb-4 mb-4">
                <h1 className="text-[#3E2723] text-4xl font-serif font-bold text-center mb-2 tracking-wide">
                    New Fall Opening Hours
                </h1>
            </header>
            
            <div className="flex flex-col text-center font-serif text-xl">
                <p className="text-[#ff3130] font-bold border-b border-gray-300 py-2">Monday - CLOSED</p>
                <p className="text-[#3E2723] border-b border-gray-300 py-2">Tues - Thurs: 11 AM - 6 PM</p>
                <p className="text-[#3E2723] border-b border-gray-300 py-2">Friday: 10 AM - 5 PM</p>
                <p className="text-[#3E2723] border-b border-gray-300 py-2">Saturday: 9 AM - 5 PM</p>
                <p className="text-[#3E2723] py-2">Sunday: 9 AM - 6 PM</p>
            </div>
        </div>
    );
}

export default Opening;
