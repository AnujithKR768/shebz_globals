import { FaWhatsapp } from "react-icons/fa";
import { usePage } from "@inertiajs/react";

export default function WhatsAppButton() {
    const { whatsapp } = usePage().props;

    const url = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
        whatsapp.message
    )}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    );
}
