import React from 'react';
import Section from '../components/common/Section';
import AboutCoursesCarousel from '../components/features/AboutCoursesCarousel';
import { Check } from 'lucide-react';
import slider_khac from '../assets/slider/sliderKhac.png'

const AboutPage = () => {
    const steps = [
        { number: 1, title: "LÀM BÀI TEST ĐẦU VÀO", desc: "Chuẩn format IELTS cùng các giáo viên chuyên môn" },
        { number: 2, title: "\"CHẨN BỆNH\"", desc: "Trực tiếp sau khi test và nhận \"BẢNG CHẨN BỆNH\" chi tiết" },
        { number: 3, title: "XÂY DỰNG LỘ TRÌNH", desc: "\"CHỮA\" (RLP) dựa trên kết quả bảng chẩn bệnh" },
        { number: 4, title: "TIẾN HÀNH DẠY VÀ HỌC", desc: "Theo lộ trình RLP đã được đề ra trước đó" },
        { number: 5, title: "TIẾP TỤC \"CHẨN BỆNH\"", desc: "Xuyên suốt khóa học theo từng chặng và mục tiêu được đặt ra" },
        { number: 6, title: "BỔ SUNG THÊM TÀI LIỆU", desc: "Để chữa những vấn đề cần cải thiện trong quá trình học" }
    ];



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

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-4 uppercase tracking-widest drop-shadow-md">
                        TỔNG QUAN VỀ XA LỘ ENGLISH
                    </h1>
                </div>
            </section>

            {/* Introduction Section */}
            <Section className='mt-12'>
                <div className="max-w-5xl mx-auto text-justify text-text-secondary space-y-4 leading-relaxed">
                    <p>
                        Sau nhiều năm đào tạo và giúp học viên chinh phục ngoại ngữ và IELTS, <span className="font-bold text-primary">Xa Lộ English</span> nhận thấy được rằng mỗi cá nhân sẽ có những vấn đề khác nhau trong quá trình học tập. Ở cùng một trình độ 6.0, nhưng có bạn sẽ yếu Reading và yếu những kỹ năng khác, hay bạn khác sẽ giỏi hơn ở Listening nhưng khó luyện tập những kỹ năng còn lại. Chính vì thế, <span className="font-bold text-primary">Xa Lộ English</span> nhận thấy được tính cấp thiết của việc nên tập trung vào từng học viên để giúp họ tháo gỡ từng vấn đề của mình trong quá trình tiến bộ từng bước, thay vì áp dụng một giáo án cố định cho cùng một mô hình lớp học.
                    </p>
                    <p>
                        Vì vậy, mô hình <span className="font-bold text-accent">"CHẨN - CHỮA"</span> ra đời nhằm mục đích đưa ra giải pháp tối ưu nhất cho toàn bộ học viên. Đây là một chuỗi các hoạt động đánh giá, xem xét, và đưa ra kết luận dành cho học viên về sự tiến bộ, khả năng sử dụng ngôn ngữ và những điểm cần cải thiện và từ đó đưa ra các phương pháp học tập và bài tập cải thiện dành riêng cho học viên đó. Mô hình cũng được lấy ý tưởng từ quy trình chẩn - trị bệnh của bác sĩ, bởi vì giống như khi gặp bác sĩ, người học sẽ được đánh giá kỹ lưỡng về khả năng và "triệu chứng" của việc học tiếng Anh, sau đó sẽ nhận được lộ trình học tập phù hợp để "chữa" các vấn đề của mình bạn.
                    </p>
                    <p className="font-bold mt-4 text-text-primary text-lg">Đến với <span className='font-bold text-primary'>Xa Lộ English</span>, để được:</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3"><Check className="text-green-500 flex-shrink-0 mt-1" size={20} /> <span><span className="font-semibold text-primary">Chẩn bệnh:</span> xác định đúng các điểm yếu cần cải thiện của các bạn trong quá trình học tiếng anh</span></li>
                        <li className="flex items-start gap-3"><Check className="text-green-500 flex-shrink-0 mt-1" size={20} /> <span><span className="font-semibold text-primary">Chữa triệt để</span> các vấn đề nhờ vào việc chẩn đoán điểm yếu, giúp bạn đạt được mục tiêu đề ra ban đầu</span></li>
                        <li className="flex items-start gap-3"><Check className="text-green-500 flex-shrink-0 mt-1" size={20} /> <span>Hướng đến mục tiêu dài hạn <span className="font-semibold text-primary">"học để dùng"</span>, ứng dụng hiệu quả tiếng Anh vào học tập và đời sống, trên cả mục tiêu điểm số</span></li>
                    </ul>
                </div>
            </Section>

            {/* Steps Section */}
            <Section className="bg-gray-50 mt-12 mb-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="mb-6 text-3xl font-bold text-primary-dark uppercase tracking-wide">CÁC BƯỚC THỰC HIỆN CHẨN - CHỮA TẠI XA LỘ ENGLISH</h2>

                    <p className="text-text-secondary mb-4 mx-auto leading-relaxed">
                        Hiểu được rằng hành trình chinh phục ngoại ngữ của mỗi người sẽ tồn tại những khó khăn riêng. Ví dụ có bạn sẽ gặp khó khăn trong việc ghi nhớ từ vựng, hoặc bạn khác sẽ thiếu tự tin trong kỹ năng nói dẫn đến việc chậm đạt, thiếu logic, hay việc ôm đồm và sắp xếp ý là điểm yếu chung của nhiều bạn trong kỹ năng viết. Đi từ việc suy nghĩ rằng, mỗi cá nhân sẽ có những điểm mạnh và điểm yếu riêng trong khi chinh phục một ngoại ngữ và do đó để đạt được mục tiêu sao cho hiệu quả nhất, mỗi bạn cũng sẽ cần một phương thức tiếp cận ngoại ngữ khác nhau thay vì áp dụng một "lộ trình chung" cho tất cả mọi người.
                    </p>
                    <p className="text-text-secondary mb-4 mx-auto leading-relaxed">
                        Không áp dụng quy trình dạy và học theo phương pháp truyền thống, Xa Lộ English sẽ luôn chú trọng việc dựa trên vấn đề của từng học viên để đưa ra lộ trình cũng như phương pháp dạy phù hợp và hiệu quả dành cho từng bạn.
                    </p>
                    <p className="text-text-secondary mb-16 mx-auto leading-relaxed">
                        Cách thức giảng dạy này được Xa Lộ English đặt tên là Quy trình “chẩn - chữa” - cụm từ được lấy ý tưởng từ việc chúng ta đến bác sĩ để thăm khám bệnh, bởi vì giống như khi gặp bác sĩ, người học sẽ được đánh giá kỹ lưỡng về khả năng và "triệu chứng" của việc học tiếng Anh, sau đó sẽ nhận được lộ trình học tập phù hợp để “chữa” các vấn đề của mỗi bạn.
                    </p>


                    <div className='grid grid-cols-4'>
                        <div className='col-span-2'>
                            <h2 className="mb-6 text-3xl font-bold text-primary-dark uppercase tracking-wide">CÁC BƯỚC THỰC HIỆN CHẨN - CHỮA TẠI XA LỘ ENGLISH</h2>
                        </div>
                        <div className='col-span-2'>
                            <p className="text-text-secondary mb-4 mx-auto leading-relaxed">
                                Cốt lõi của mô hình Chẩn - Chữa là dựa trên kết quả "chẩn" từ bài thi đầu vào và từ những đánh giá của giáo viên đối với học sinh trong quá trình học, từ đó đưa ra phương pháp "chữa" cho từng học viên.
                            </p>
                            <p className="text-text-secondary mb-4 mx-auto leading-relaxed">
                                Sau nhiều năm kể từ khi thành lập, Xa Lộ English đã không ngừng cải tiến mô hình giáo dục này và thử nghiệm trên nhiều học viên. Theo số liệu đến hiện tại (2024), hơn 90% phụ huynh và học sinh hài lòng với phương pháp “chẩn - chữa” và nhiều học viên đạt được kết quả vượt mong đợi.
                            </p>

                        </div>
                    </div>

                    <div className="relative py-8">
                        <div className="absolute top-0 bottom-0 left-[50px] w-0.5 bg-primary -translate-x-1/2 hidden md:block"></div>
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0 relative group">
                                <div className="w-[100px] flex-shrink-0 flex justify-center relative z-10 mb-4 md:mb-0">
                                    <div className="w-20 h-20 rounded-full flex flex-col justify-center items-center text-white text-sm border-4 border-white  bg-gradient-to-br from-pink-300 to-pink-400 transition-transform group-hover:scale-110 duration-300">
                                        <span>Bước</span>
                                        <span className="font-bold text-xl">{step.number}</span>
                                    </div>
                                </div>
                                <div className="md:ml-8 bg-white p-6 rounded-xl shadow-md flex-1 relative w-full border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
                                    <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white hidden md:block"></div>
                                    <h3 className="font-bold text-primary-dark uppercase mb-2 text-lg">{step.title}</h3>
                                    <p className="text-text-secondary">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Courses Preview */}
            <Section>
                <h2 className="text-center mb-6 text-3xl font-bold text-primary-dark uppercase tracking-wide">CÁC KHÓA HỌC TẠI XA LỘ ENGLISH</h2>
                <AboutCoursesCarousel />
            </Section>
        </div>
    );
};

export default AboutPage;
