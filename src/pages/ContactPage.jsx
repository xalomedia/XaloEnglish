import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import slider_khac from '../assets/slider/sliderKhac.png';

const ContactPage = () => {
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

                    <h1 className="text-4xl md:text-6xl uppercase font-extrabold text-white text-center mb-4 uppercase tracking-widest drop-shadow-md">Thông tin liên hệ</h1>

                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
            </section>

            <Section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-12 uppercase text-center">
                        Liên hệ với chúng tôi
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Map & Info */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[350px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.95911633657693!2d106.68131043365845!3d10.784800380034875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f215d69b7f5%3A0xb2bc514fde61d462!2zWGEgTOG7mSBFbmdsaXNo!5e0!3m2!1svi!2s!4v1672797694483!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>

                            {/* Info Cards */}
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                                <h3 className="text-xl font-bold text-primary-dark mb-6 uppercase border-b pb-4">Địa chỉ của chúng tôi</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-50 rounded-lg text-primary shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <strong className="block text-gray-800 mb-1">XALO.ENGLISH</strong>
                                            <address className="text-gray-600 not-italic text-sm">
                                                250 Nguyễn Đình Chính, phường 11, quận Phú Nhuận, TP HCM
                                            </address>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-50 rounded-lg text-primary shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <strong className="block text-gray-800 mb-1">Điện thoại</strong>
                                            <p className="text-gray-600 text-sm">0793 159 413</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-50 rounded-lg text-primary shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <strong className="block text-gray-800 mb-1">Thời gian Mở cửa</strong>
                                            <p className="text-gray-600 text-sm">Các ngày trong tuần: 9:00 - 23:00</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg h-fit">
                            <h3 className="text-2xl font-bold text-primary-dark mb-8 uppercase text-center">Gửi tin nhắn cho chúng tôi</h3>
                            <form action="#" method="post" className="space-y-6">
                                <div>
                                    <label htmlFor="input-name" className="block text-sm font-bold text-gray-700 mb-2">Tên của bạn <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="input-name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Nhập tên của bạn"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="input-email" className="block text-sm font-bold text-gray-700 mb-2">Địa chỉ Email <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="input-email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Nhập email của bạn"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="input-enquiry" className="block text-sm font-bold text-gray-700 mb-2">Nội dung <span className="text-red-500">*</span></label>
                                    <textarea
                                        name="enquiry"
                                        rows="6"
                                        id="input-enquiry"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        placeholder="Nhập nội dung tin nhắn..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="pt-4">
                                    <Button variant="primary" className="w-full py-4 text-lg font-bold uppercase shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                        Gửi đi
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ContactPage;
