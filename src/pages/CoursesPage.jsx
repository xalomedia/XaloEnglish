import React, { useState, useEffect } from 'react';
import client from '../api/client';
import Section from '../components/common/Section';
import DetailedCourseCard from '../components/features/DetailedCourseCard';
import Button from '../components/common/Button';
import slider_khac from '../assets/slider/sliderKhac.png'

const CoursesPage = () => {
    const [offlineCourses, setOfflineCourses] = useState([]);
    const [onlineCourses, setOnlineCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await client.get('/programs/tracks');

                const offline = data.filter(track =>
                    track.group?.name?.toLowerCase().includes('offline')
                ).map(mapTrackToCourse);

                const online = data.filter(track =>
                    track.group?.name?.toLowerCase().includes('online')
                ).map(mapTrackToCourse);

                setOfflineCourses(offline);
                setOnlineCourses(online);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const mapTrackToCourse = (track) => ({
        title: track.name,
        image: track.detailIllustrationUrl,
        input: track.entryBandText,
        output: track.exitBandText,
        target: (
            <ul className="list-disc list-inside space-y-1">
                {track.targetAudience?.map((audience, idx) => (
                    <React.Fragment key={idx}>
                        {audience.bullets?.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>
        ),
        description: track.description,
        link: track.courseLink || `/course-details/${track.slug}`
    });

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

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-4 uppercase tracking-widest drop-shadow-md">Các Khóa học tại <br />Xa Lộ English</h1>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
            </section>

            <Section className='mt-12 mb-16'>
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4 text-primary-dark uppercase tracking-wide">IELTS OFFLINE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offlineCourses.map((course, index) => (
                            <DetailedCourseCard key={index} {...course} />
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 border-l-4 border-accent pl-4 text-primary-dark uppercase tracking-wide">IELTS ONLINE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {onlineCourses.map((course, index) => (
                            <DetailedCourseCard key={index} {...course} />
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                            <img
                                src="https://xalo.edu.vn/image/cache/catalog/banner/banner-breadcrumb-0x0.png"
                                alt="Lớp 1 on 1"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                            <h3 className="absolute bottom-6 left-6 text-3xl font-extrabold text-white lg:hidden drop-shadow-md uppercase">Lớp 1 on 1</h3>
                        </div>
                        <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                            <h2 className="hidden lg:block text-3xl font-extrabold text-primary-dark mb-6 uppercase">Lớp 1 on 1 tại Xa Lộ English có gì?</h2>

                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <div>
                                    <strong className="text-primary-dark block mb-1">Đầu vào/Đầu ra:</strong>
                                    <p className="text-justify">Tuỳ thuộc vào nhu cầu của từng học viên. Sau khi làm bài test đầu vào tại Xa Lộ English và xác nhận được đầu vào của học viên, trung tâm sẽ ký hợp đồng Cam kết chất lượng giảng dạy/Hợp đồng cam kết đầu ra theo đầu ra mong muốn của học viên.</p>
                                </div>
                                <div>
                                    <strong className="text-primary-dark block mb-1">Thời lượng khoá học:</strong>
                                    <p className="text-justify">Tuỳ thuộc vào nhu cầu đầu ra của từng học viên, Xa Lộ English sẽ thiết kế lộ trình có thời gian đảm bảo mục tiêu đầu ra của học viên ấy.</p>
                                </div>
                                <div>
                                    <strong className="text-primary-dark block mb-1">Hợp đồng cam kết:</strong>
                                    <p>Hợp đồng cam kết đầu ra/Hợp đồng cam kết chất lượng giảng dạy.</p>
                                </div>
                                <div>
                                    <strong className="text-primary-dark block mb-1">Học phí:</strong>
                                    <ul className="list-disc list-inside pl-2 space-y-1">
                                        <li>500.000VNĐ/h - Đối với hình thức học Online</li>
                                        <li>700.000VNĐ/h - Đối với hình thức học Offline</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                    <strong className="text-yellow-800 block mb-1">Lưu ý:</strong>
                                    <p className="text-yellow-800 text-sm text-justify">Trong trường hợp học viên muốn học cùng nhóm 1:2 hoặc 1:3 với bạn của mình, Xa Lộ English sẵn sàng hỗ trợ và tư vấn kỹ hơn đối với các nhu cầu trên.</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button variant="primary" size="large" className="w-full md:w-auto shadow-lg hover:shadow-xl uppercase font-bold" onClick={() => window.location.href = '#'}>
                                    Xem chi tiết &gt;
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default CoursesPage;
