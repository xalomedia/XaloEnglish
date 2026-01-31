import React from 'react';
import { MessageCircle, Stethoscope } from 'lucide-react';

const FloatingActions = () => {
    return (
        <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-3">
            {/* Tư vấn khóa học */}
            <a
                href="#form_xalo_diagnosis"
                className="flex items-center gap-2 bg-white text-primary-dark p-2 md:pr-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 group border border-gray-100"
            >
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} fill="currentColor" />
                </div>
                <span className="font-bold text-sm hidden md:inline">Tư vấn khóa học</span>
            </a>

            {/* Chuẩn bệnh miễn phí */}
            <a
                href="https://www.messenger.com/t/facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-primary-dark p-2 md:pr-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 group border border-gray-100"
            >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                    <Stethoscope size={20} />
                </div>
                <span className="font-bold text-sm hidden md:inline">Chuẩn bệnh miễn phí</span>
            </a>

        </div>
    );
};

export default FloatingActions;
