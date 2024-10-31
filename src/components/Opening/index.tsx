const Opening = () => {
    return (
        <div className="m-10 p-4 bg-[#F4F1DE]] rounded-lg shadow-lg">
            <header className="flex flex-col">
                <h1 className="text-[#3E2723] text-3xl font-poppins text-center mb-4">
                    New Fall Opening Hours
                </h1>
                <div className="flex text-center font-poppins flex-col text-lg mb-2">
                    <p className="text-[#ff3130] font-bold">Monday - CLOSED</p>
                    <p className="text-[#3E2723]">Tues - Thurs: 11 AM - 6 PM</p>
                    <p className="text-[#3E2723]">Friday: 10 AM - 5 PM</p>
                    <p className="text-[#3E2723]">Saturday: 9 AM - 5 PM</p>
                    <p className="text-[#3E2723]">Sunday: 9 AM - 6 PM</p>
                </div>
            </header>
        </div>
    );
}

export default Opening;
