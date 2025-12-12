import React from 'react';
import { Star } from 'lucide-react';


const ReviewCard = ({ name, role, content, rating = 5, image }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    {image && <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />}
                    <div>
                        <h4 className="text-base font-bold text-primary-dark mb-0.5">{name}</h4>
                        <p className="text-sm text-text-secondary">{role}</p>
                    </div>
                </div>
                <div className="flex gap-0.5">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                </div>
            </div>
            <p className="italic text-text-primary leading-relaxed">"{content}"</p>
        </div>
    );
};

export default ReviewCard;
