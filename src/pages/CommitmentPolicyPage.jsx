import React from 'react';
import Section from '../components/common/Section';
import RelatedCourses from '../components/features/RelatedCourses';
import { FileText, Download } from 'lucide-react';
import slider_khac from '../assets/slider/sliderKhac.png';

const CommitmentPolicyPage = () => {
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

                    <h1 className="text-4xl md:text-6xl uppercase font-extrabold text-white text-center mb-4 uppercase tracking-widest drop-shadow-md">Chính sách cam kết</h1>

                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
            </section>
            <Section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-8 uppercase border-l-8 border-primary pl-6">
                        Chính sách cam kết
                    </h1>

                    <div className="prose prose-lg max-w-none text-text-secondary">
                        <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">HỢP ĐỒNG CAM KẾT</h2>
                        <p className="mb-6">Tất cả học viên đăng kí tại Xa Lộ English đều sẽ có hợp đồng cam kết, đảm bảo chất lượng giảng dạy và chất lượng đầu ra đối với mọi mô hình lớp tại trung tâm.</p>
                        <p className="mb-8">Các văn bản được cam kết dựa trên kết quả bài test đầu vào của học viên. Ở đây chúng tôi có ba loại cam kết như sau:</p>

                        <div className="grid gap-6">
                            {/* Contract 1 */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">Hợp đồng cam kết đầu ra</h3>
                                        <p className="text-sm text-gray-500">(Học viên đã làm đủ BÀI TEST TIẾNG ANH ĐẦU VÀO)</p>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
                                    <Download size={18} /> Tải xuống
                                </a>
                            </div>

                            {/* Contract 2 */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">Hợp đồng cam kết chất lượng giảng dạy</h3>
                                        <p className="text-sm text-gray-500">(HỌC VIÊN KHÔNG LÀM ĐỦ BÀI TEST TIẾNG ANH ĐẦU VÀO)</p>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
                                    <Download size={18} /> Tải xuống
                                </a>
                            </div>

                            {/* Contract 3 */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">Hợp đồng Lớp 1 kèm 1</h3>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
                                    <Download size={18} /> Tải xuống
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <RelatedCourses />
        </div>
    );
};

export default CommitmentPolicyPage;
