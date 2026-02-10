import React, { useState, useEffect } from 'react';
import Section from '../components/common/Section';
import TeacherCard from '../components/features/TeacherCard';
import slider_khac from '../assets/slider/sliderKhac.png';
import client from '../api/client';
const TeachersPage = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const { data } = await client.get('/mentors');
                setTeachers(data.map(mentor => ({
                    _id: mentor._id,
                    name: mentor.name,
                    overall: mentor.overall,
                    slogan_Title: mentor.slogan_Title,
                    slogan_Content: mentor.slogan_Content,
                    image: mentor.imageUrl,
                    secondaryImage: mentor.ieltsImage
                })));
            } catch (error) {
                console.error('Error fetching mentors:', error);
            }
        };

        fetchMentors();
    }, []);

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
                    <h1 className="text-5xl font-extrabold text-white text-center mb-4 uppercase tracking-widest">Đội Ngũ Giáo Viên</h1>

                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIi8+PGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMyIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
            </section>

            <Section className="bg-white mt-12 mb-32">
                <div className='relative mb-6'>
                    <p className="text-center text-lg max-w-2xl mx-auto opacity-90">
                        Để giúp khách hàng và học viên yên tâm về chất lượng tại Xa Lộ English.
                        Chúng mình luôn công khai minh bạch mọi thông tin về các giảng viên.
                    </p>
                    <div className="w-72 lg:w-150 rounded-full h-1 bg-primary mx-auto mt-4"></div>
                </div>
                <div className="flex flex-col gap-32 px-4">
                    {teachers.map((teacher, index) => (
                        <TeacherCard key={index} {...teacher} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default TeachersPage;
