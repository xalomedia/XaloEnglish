import React from 'react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const DetailedCourseCard = ({ title, image, input, output, target, description, link }) => {
    return (
        <div className="bg-[#e0e7ff]/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
            {/* Header Image Section */}
            <div className="relative h-[220px] overflow-hidden bg-pink-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-3xl font-extrabold text-white drop-shadow-md uppercase tracking-wide">{title}</h3>
            </div>

            {/* Body Section */}
            <div className="p-6 flex-grow flex flex-col bg-[#e0e7ff]/30">
                {/* Input/Output/Target */}
                <div className="mb-6 space-y-2">
                    {(input || output) && (
                        <div className="flex flex-wrap gap-2 text-sm font-bold text-gray-700">
                            {input && (
                                <span className="flex items-center gap-1">
                                    • Đầu vào: <span className="text-primary-dark">{input}</span>
                                </span>
                            )}
                            {output && (
                                <span className="flex items-center gap-1">
                                    • Đầu ra: <span className="text-primary-dark">{output}</span>
                                </span>
                            )}
                        </div>
                    )}
                    {target && (
                        <div className="text-sm font-bold text-gray-700">
                            • Đối tượng: <div className="font-normal text-text-secondary mt-1">{target}</div>
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="mb-6 text-sm text-text-secondary text-justify leading-relaxed flex-grow">
                    {description}
                </div>

                {/* Button */}
                <div className="mt-auto pt-6 flex justify-center">
                    <Link to={link || "/course-details"} className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-sm uppercase tracking-wide">
                        Chi tiết khóa học
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailedCourseCard;
