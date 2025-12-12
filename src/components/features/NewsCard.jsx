import React from 'react';
import { ArrowRight } from 'lucide-react';


const NewsCard = ({ title, image, category, link }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col group">
            <div className="relative pt-[65%] overflow-hidden">
                <img src={image} alt={title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase shadow-sm">{category}</div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-text-primary mb-4 leading-snug line-clamp-2 hover:text-primary transition-colors">{title}</h3>
                <a href={link} className="inline-flex items-center gap-2 text-primary font-medium text-sm transition-colors hover:text-primary-dark group-hover:translate-x-1 duration-300">
                    Xem chi tiết <ArrowRight size={16} />
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
