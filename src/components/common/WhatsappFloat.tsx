
const WhatsAppFloat = () => {
    const phoneNumber = '+9779810685891';
    const message = 'Hello, I have a question and would like to know more.';

    return (
        <div className="fixed bottom-6 right-6 z-50 group">
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-xl animate-bounce hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-7 h-7"
                />
            </a>
            <div className="absolute right-16 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg">
                WhatsApp
            </div>
        </div>
    );
};

export default WhatsAppFloat;
