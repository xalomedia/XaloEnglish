import React from 'react';


const TeacherCard = ({ image, name, overall, slogan_Title, slogan_Content, secondaryImage }) => {
    return (
        <div className="bg-white rounded-3xl overflow-visible shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl group relative">
            <div className="flex flex-col md:flex-row h-full">

                <div className="w-full md:w-[75%] lg:w-[66.66%] relative p-8 flex flex-col md:flex-row gap-6 items-start z-10">

                    <div className="flex-shrink-0">
                        <div className="w-[200px] h-full border-4 border-white relative z-20">
                            <img src={image} alt={name} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="flex-grow pt-2">
                        {/* Name (name_teacher) */}
                        <h2 className="text-2xl font-extrabold text-primary-dark uppercase mb-2 tracking-wide leading-tight">{name}</h2>

                        {/* Overall */}
                        <p className="text-[#4b5563] font-semibold mb-4 text-lg">
                            Overall: <span className="text-2xl font-bold text-[#312e81]">{overall}</span>
                        </p>

                        {/* Slogan Title */}
                        <p className="font-bold text-black uppercase text-sm mb-1 tracking-wider">
                            "{slogan_Title}
                        </p>

                        {/* Slogan Content */}
                        <div
                            className="text-text-secondary text-base leading-relaxed space-y-1 teacher-desc-content italic"
                            dangerouslySetInnerHTML={{ __html: slogan_Content }}
                        />
                    </div>

                    <div className="hidden lg:block absolute top-0 right-0 w-[120px] h-[200px] bg-[#d9dcf6] rounded-bl-3xl z-0"></div>

                    <div className="hidden lg:block absolute top-0 right-[40px] w-[80px] h-[30px] bg-[#d9dcf6] z-0"></div>

                </div>

                <div className="hidden md:block absolute right-[-20px] top-[40px] w-[220px] h-[300px] z-10">


                    {secondaryImage ? (
                        <img
                            src={secondaryImage}
                            alt={name}
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl z-20"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-[#e0e3f5] rounded-3xl z-20"></div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default TeacherCard;