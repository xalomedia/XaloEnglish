import React from 'react';
import { X } from 'lucide-react';
import Button from '../common/Button';

const StudentResultModal = ({ isOpen, onClose, result }) => {
    if (!isOpen || !result) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 bg-white/80 rounded-full transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left Side: Certificate Image */}
                    <div className="md:w-5/12 bg-gray-100 flex items-center justify-center p-4">
                        <img
                            src={result.certificateImageUrl || "https://placehold.co/400x600?text=Certificate"}
                            alt={`${result.name} Certificate`}
                            className="w-full h-auto object-contain rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Right Side: Details */}
                    <div className="md:w-7/12 p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                                <img
                                    src={result.profileImgURL || "https://placehold.co/100x100?text=Avatar"}
                                    alt={result.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-dark uppercase">{result.name}</h3>
                        </div>

                        <div className="mb-8">
                            <div className="overflow-x-auto mb-6 border border-gray-200 rounded-lg">
                                <table className="w-full border-collapse text-sm">
                                    <tbody>
                                        <tr className="divide-x divide-gray-200">
                                            <td className="p-4 w-1/2 align-top">
                                                <ul className="space-y-2 text-text-secondary">
                                                    <li>Đầu vào: <strong className="text-primary-dark text-lg">{result.inputScore}</strong></li>
                                                    <li>Listening: <span className="font-medium text-gray-900">{result.listening}</span></li>
                                                    <li>Reading: <span className="font-medium text-gray-900">{result.reading}</span></li>
                                                </ul>
                                            </td>
                                            <td className="p-4 w-1/2 align-top bg-gray-50/50">
                                                <ul className="space-y-2 text-text-secondary">
                                                    <li>Điểm Overall: <strong className="text-primary text-xl">{Number(result.overall).toFixed(1)}</strong></li>
                                                    <li>Writing: <span className="font-medium text-gray-900">{result.writing}</span></li>
                                                    <li>Speaking: <span className="font-medium text-gray-900">{result.speaking}</span></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <ul className="space-y-3 text-text-secondary bg-blue-50 p-4 rounded-lg">
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold text-primary-dark min-w-[100px]">Lớp:</span>
                                    <span className="font-bold text-gray-800">{result.className}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-semibold text-primary-dark min-w-[100px]">Thời gian học:</span>
                                    <span className="font-bold text-gray-800">{result.studyTime}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-auto flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                className="flex-1 justify-center"
                                onClick={() => window.location.href = '#form_xalo_diagnosis'}
                            >
                                Tư vấn khóa học
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1 justify-center"
                                onClick={() => window.location.href = '#'}
                            >
                                Chẩn bệnh miễn phí
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentResultModal;
