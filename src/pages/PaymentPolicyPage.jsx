import React from 'react';
import Section from '../components/common/Section';
import RelatedCourses from '../components/features/RelatedCourses';
import slider_khac from '../assets/slider/sliderKhac.png'

const PaymentPolicyPage = () => {
    return (
        <div className="pt-20 bg-white">
            <section className="relative pt-32 pb-24 overflow-hidden min-h-[60vh]"
                            style={{
                                backgroundImage: `url(${slider_khac})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="absolute inset-0 bg-primary-dark opacity-70"></div>
            
                            <div className="container mx-auto px-4 relative z-10">
            
                                <h1 className="text-4xl md:text-6xl uppercase font-extrabold text-white text-center mb-4 uppercase tracking-widest drop-shadow-md">Chính sách thanh toán</h1>
            
                            </div>
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
                        </section>
            <Section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-8 uppercase border-l-8 border-primary pl-6">
                        Chính sách thanh toán
                    </h1>

                    <div className="prose prose-lg max-w-none text-text-secondary">
                        <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">Thanh toán học phí tại Xa Lộ English như thế nào?</h2>
                        <p className="mb-6">Xa Lộ English đưa ra 2 chính sách nhằm giúp phụ huynh và học viên có thể thanh toán nhanh chóng và thuận tiện nhất.</p>

                        <div className="bg-blue-50 p-8 rounded-2xl mb-8 border border-blue-100">
                            <h3 className="text-xl font-bold text-primary mb-3">1. Thanh toán bằng tiền mặt</h3>
                            <p>Học viên sẽ thanh toán tiền mặt trực tiếp cho nhân viên tư vấn khi đăng kí khoá học tại Xa Lộ English</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-3">2. Thanh toán chuyển khoản</h3>
                            <p className="mb-4">Học viên vui lòng chuyển khoản về địa chỉ:</p>
                            <ul className="list-none space-y-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                                <li><span className="font-bold text-gray-700">Số tài khoản:</span> 1024709435</li>
                                <li><span className="font-bold text-gray-700">Chủ tài khoản:</span> Võ Duy Phúc</li>
                                <li><span className="font-bold text-gray-700">Ngân hàng:</span> TMCP Ngoại thương Vietcombank</li>
                            </ul>

                            <p className="font-bold text-gray-700 mb-2">Nội dung chuyển khoản:</p>
                            <ul className="space-y-3">
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Đối với lớp nhóm: <strong>Họ và tên Học viên + mã lớp</strong> <br /><span className="text-sm text-gray-500 italic">(Ví dụ: Nguyen Van An OI FOU MWF 1921 061221)</span></span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span>Đối với lớp 1:1: <strong>Họ và tên Học viên + 11 + ngày đóng</strong> <br /><span className="text-sm text-gray-500 italic">(Ví dụ: Nguyen Van An 11 041221)</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <RelatedCourses />
        </div>
    );
};

export default PaymentPolicyPage;
