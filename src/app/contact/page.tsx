import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const contact = () => {
    const contacts = [
        {
            title: 'Call us!',
            description: 'Call us if you want to order, book a table or have questions!',
            buttonLabel: 'Call Now',
            buttonLink: 'tel:+086400271',
            iconsrc: '/images/telephone.png',
        },
        {
            title: 'Visit Us',
            description: 'Here you can visit us at our location.',
            buttonLabel: 'Get Directions',
            buttonLink: 'https://www.google.com/maps/place/Bondegatan+13,+11623+Stockholm',
            iconsrc: '/images/map.png',
        },
        {
            title: 'Email Us',
            description: 'Send us an email and we will get back to you shortly.',
            buttonLabel: 'Send Email',
            buttonLink: 'mailto:info@recoschickenandwaffles.com',
            iconsrc: '/images/sent.png',
        },
        {
            title: 'Instagram',
            description: 'Check out our Instagram to see the latest updates!',
            buttonLabel: 'Visit Instagram',
            buttonLink: 'https://www.instagram.com/recoscnw/',
            iconsrc: '/images/love.png',
        },
    ];

    return (
        <>
            <Header />
            <div className="bg-[#004aad] text-[#2b2b2b] px-8 py-16 font-poppins">
                <h1 className="text-5xl font-light font-poppins text-center mb-2 text-[#FEFEFC]">Contact Us</h1>
                <p className='text-center font-poppins font-xl text-[#FEFEFC] mb-10 italic'>For bookings and reservations, we recommend you reach out by phone!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contacts.map((contact, index) => (
                <div key={index} className="p-6 bg-white rounded-lg border-[#ff3130] border-4 text-center">
                    <Image 
                        src={contact.iconsrc} 
                        width={40}
                        height={40} 
                        alt={`${contact.title} icon`} 
                        className="mb-4 mx-auto" 
                    />
                    <h2 className="text-2xl font-semibold font-poppins mb-4">{contact.title}</h2>
                    <p className="mb-6 font-poppins font-light">{contact.description}</p>
                    <a
                        href={contact.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#ff3130] text-white py-2 px-4 font-poppins rounded-lg hover:bg-[#00398a] transition duration-300"
                    >
                        <button>{contact.buttonLabel}</button>
                    </a>
                    </div>
                ))}
                </div>
            </div>
        <Footer />
        </>
    );
};

export default contact;
