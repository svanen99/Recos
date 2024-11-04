import Header from '@/components/Header';

const contact = () => {
    const contacts = [
        {
            title: 'Call us!',
            description: 'Call us if you want to order or have questions!',
            buttonLabel: 'Call Now',
            buttonLink: 'tel:+086400271',
        },
        {
            title: 'Visit Us',
            description: 'Here you can visit us at our location.',
            buttonLabel: 'Get Directions',
            buttonLink: 'https://www.google.com/maps/place/Bondegatan+13,+11623+Stockholm',
        },
        {
            title: 'Email Us',
            description: 'Send us an email and we will get back to you shortly.',
            buttonLabel: 'Send Email',
            buttonLink: 'mailto:info@recoschickenandwaffles.com',
        },
        {
            title: 'Instagram',
            description: 'Check out our Instagram to see the latest updates!',
            buttonLabel: 'Visit Instagram',
            buttonLink: 'https://www.instagram.com/recoscnw/',
        },
    ];

    return (
        <>
            <Header />
            <div className="bg-[#004aad] text-[#2b2b2b] px-8 py-16 font-sans">
                <h1 className="text-5xl font-bold text-center mb-10 text-[#FEFEFC]">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contacts.map((contact, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg border-[#ff3130] border-2 text-center">
                            <h2 className="text-2xl font-semibold mb-4">{contact.title}</h2>
                            <p className="mb-6">{contact.description}</p>
                            <a
                                href={contact.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#004aad] text-white py-2 px-4 rounded-lg hover:bg-[#00398a] transition duration-300"
                            >
                                {contact.buttonLabel}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default contact;
