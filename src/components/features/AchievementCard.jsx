import React from 'react';


const AchievementCard = ({ image, name, input, output, classInfo, duration, quote }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full border border-gray-100 flex flex-col group">
            <div className="p-6 bg-gray-50 flex justify-center items-center">
                <img src={image} alt={`Thành tích của ${name}`} className="max-w-full h-auto rounded-lg shadow-sm border border-gray-200 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary-dark mb-4 uppercase">{name}</h3>

                {/* Scores Table */}
                <div className="mb-4 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 text-sm">
                    <div className="grid grid-cols-2 divide-x divide-gray-200">
                        <div className="p-3">
                            <div className="font-bold text-primary-dark mb-1">Đầu vào</div>
                            <ul className="text-text-secondary space-y-1 text-left pl-2">
                                {input && Object.entries(input).map(([key, value]) => (
                                    <li key={key}><span className="font-medium">{key}:</span> {value}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-3">
                            <div className="font-bold text-primary-dark mb-1">Đầu ra</div>
                            <ul className="text-text-secondary space-y-1 text-left pl-2">
                                {output && Object.entries(output).map(([key, value]) => (
                                    <li key={key}><span className="font-medium">{key}:</span> <strong>{value}</strong></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Class Info */}
                <div className="text-left text-sm text-text-secondary mb-4 space-y-1">
                    <p><span className="font-bold text-primary-dark">Lớp:</span> {classInfo}</p>
                    <p><span className="font-bold text-primary-dark">Thời gian:</span> {duration}</p>
                </div>

                {quote && (
                    <div className="mt-auto italic text-text-secondary text-sm border-t border-gray-200 pt-4">
                        <p dangerouslySetInnerHTML={{ __html: quote }}></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AchievementCard;
