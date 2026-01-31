import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const HomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a short delay to allow initial load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative bg-transparent max-w-md w-full animate-fade-in-up">
                <button
                    onClick={closePopup}
                    className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <a
                    href="https://www.facebook.com/groups/803035587934322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl overflow-hidden shadow-2xl"
                >
                    <img
                        src="popup.png"
                        alt="Tham gia group IELTS Station"
                        className="w-full h-auto object-contain"
                    />
                </a>
            </div>
        </div>
    );
};

export default HomePopup;
