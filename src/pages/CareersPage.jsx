import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { DollarSign, Smile, Plane, Gift } from 'lucide-react';
import slider_khac from '../assets/slider/sliderKhac.png'


const CareersPage = () => {
    const benefits = [
        {
            image: "https://xalo.edu.vn/image/catalog/services/recruitment/svg-1.svg",
            title: "Mức lương cao trong thị trường tuyển dụng"
        },
        {
            image: "https://xalo.edu.vn/image/catalog/services/recruitment/svg-4.svg",
            title: "Môi trường làm việc trẻ, cởi mở, năng động, tôn trọng và tạo điều kiện phát huy giá trị bản thân"
        },
        {
            image: "https://xalo.edu.vn/image/catalog/services/recruitment/svg-3.svg",
            title: "Mỗi năm đi du lịch 2-3 lần"
        },
        {
            image: "https://xalo.edu.vn/image/catalog/services/recruitment/svg-2.svg",
            title: "Được hưởng các quyền lợi theo chính sách của công ty"
        }
    ];

    const [activeTab, setActiveTab] = React.useState('job-openings');

    return (
        <div className="pt-20 bg-white">
            {/* Hero Section */}
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

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-4 uppercase tracking-widest drop-shadow-md">Tuyển dụng tại <br />Xa Lộ English</h1>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
            </section>


            {/* Benefits Section */}
            <Section className='mt-16'>
                <h2 className="text-center mb-16 text-3xl font-bold text-primary-dark uppercase tracking-wide">ĐỒNG HÀNH VỚI XA LỘ ENGLISH, bạn sẽ nhận được</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-4 group">
                            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                            </div>
                            <p className="text-text-primary font-medium leading-relaxed">{item.title}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Job Openings Section */}
            <Section className="mb-12">
                <div className="max-w-5xl mx-auto">
                    <div className="flex border-b border-gray-200 mb-8">
                        <button
                            className={`py-4 px-8 font-bold text-lg uppercase tracking-wide transition-colors duration-300 ${activeTab === 'job-openings' ? 'text-primary-dark border-b-4 border-primary-dark' : 'text-text-secondary hover:text-primary-dark'}`}
                            onClick={() => setActiveTab('job-openings')}
                        >
                            JOB OPENINGS
                        </button>
                        <button
                            className={`py-4 px-8 font-bold text-lg uppercase tracking-wide transition-colors duration-300 ${activeTab === 'academic' ? 'text-primary-dark border-b-4 border-primary-dark' : 'text-text-secondary hover:text-primary-dark'}`}
                            onClick={() => setActiveTab('academic')}
                        >
                            ACADEMIC
                        </button>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-8">
                        {activeTab === 'job-openings' && (
                            <div className="border-b border-gray-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                                    <a href="https://xalo.edu.vn/giao-vien-ielts" className="hover:underline">Giáo viên IELTS</a>
                                </h3>
                                <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2">
                                    <li>Full-time/ Part-time:</li>
                                    <li>Số lượng: 10</li>
                                </ul>
                                <Button variant="primary" size="small" className="shadow-md hover:shadow-lg" onClick={() => window.location.href = 'https://xalo.edu.vn/giao-vien-ielts'}>Apply now</Button>
                            </div>
                        )}

                        {activeTab === 'academic' && (
                            <div className="border-b border-gray-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                                    <a href="https://xalo.edu.vn/giao-vien-ielts" className="hover:underline">Giáo viên IELTS</a>
                                </h3>
                                <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2">
                                    <li>Full-time/ Part-time:</li>
                                    <li>Số lượng: 10</li>
                                </ul>
                                <Button variant="primary" size="small" className="shadow-md hover:shadow-lg" onClick={() => window.location.href = 'https://xalo.edu.vn/giao-vien-ielts'}>Apply now</Button>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default CareersPage;
