import React from 'react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { CheckCircle, ClipboardList, TrendingUp, ShieldCheck, MessageCircle } from 'lucide-react';
import slider_khac from '../assets/slider/sliderKhac.png'
import CTASection from '../components/features/CTASection';


const MethodPage = () => {
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

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-4 uppercase tracking-widest drop-shadow-md">PHƯƠNG PHÁP <br /> CHẤN - CHỮA</h1>
                    <p className="text-center text-white text-lg max-w-3xl mx-auto opacity-90">
                        Giải pháp độc quyền tại Xalo English giúp học viên lấy lại căn bản,
                        khắc phục điểm yếu và bứt phá điểm số trong thời gian ngắn nhất.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
            </section>

            {/* Introduction */}
            <Section className='mt-12'>
                <div className="max-w-5xl mx-auto">
                    <p className="text-text-secondary mb-4 mx-auto leading-relaxed">
                        Không áp dụng quy trình dạy và học theo phương pháp truyền thống, Xa Lộ English sẽ luôn chú trọng việc dựa trên vấn đề của từng học viên để đưa ra lộ trình cũng như phương pháp dạy phù hợp và hiệu quả dành cho từng bạn.
                    </p>
                    <p className="text-text-secondary mb-4 mx-auto leading-relaxed">
                        Cách thức giảng dạy này được Xa Lộ English đặt tên là Quy trình “chẩn - chữa” - cụm từ được lấy ý tưởng từ việc chúng ta đến bác sĩ để thăm khám bệnh, bởi vì giống như khi gặp bác sĩ, người học sẽ được đánh giá kỹ lưỡng về khả năng và "triệu chứng" của việc học tiếng Anh, sau đó sẽ nhận được lộ trình học tập phù hợp để “chữa” các vấn đề của mỗi bạn. Sau nhiều năm kể từ khi thành lập, Xa Lộ English đã không ngừng cải tiến mô hình giáo dục này và thử nghiệm trên nhiều học viên. Theo số liệu đến hiện tại (2024), hơn 90% phụ huynh và học sinh hài lòng với phương pháp “chẩn - chữa” và nhiều học viên đạt được kết quả vượt mong đợi.
                    </p>

                </div>
            </Section>

            {/* Steps Overview */}
            <Section className="bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark uppercase tracking-wide mb-6">
                        CÁC BƯỚC HIỆN THỰC PHƯƠNG PHÁP <br /> CHẤN - CHỮA
                    </h2>
                    <p className="text-text-secondary max-w-4xl mx-auto leading-relaxed">
                        Mô hình "chấn - chữa" là phương pháp giảng dạy chính tại Xa Lộ English trong tất cả các khóa học bao gồm: Lớp nhóm online, lớp nhóm offline, lớp 1:1. Để mỗi học viên có trải nghiệm học tập tốt nhất và có được kết quả mong muốn, Xa Lộ English luôn chú trọng quy trình Chấn - Chữa dựa theo quy trình sau:
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24 max-w-6xl mx-auto">
                    {/* Step 1 */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 uppercase">Bước 1: LÀM BÀI TEST ĐẦU VÀO</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-start">
                            <div className="text-justify text-text-secondary leading-relaxed space-y-4 lg:col-span-4">
                                <p>
                                    Thông qua bài kiểm tra đánh giá, học viên sẽ được đánh giá chi tiết về trình độ và khả năng sử dụng ngôn ngữ trong bài thi IELTS. Không dừng lại ở việc xác định điểm số, đây là một quy trình quan trọng mà Xa Lộ English áp dụng cho tất cả các học viên nhằm xác định đúng trọng tâm vấn đề mà học viên đang gặp phải, đồng thời xác định quỹ thời gian học để từ đó đưa ra bức tranh toàn cảnh về lộ trình của học viên trong khóa học.
                                </p>
                            </div>
                            <div className='lg:col-span-3 lg:ms-24'>
                                <img
                                    src="https://xalo.edu.vn/image/cache/catalog/hinhweb-artboard-1-copy-5-1800x1500.png"
                                    alt="Bước 1: LÀM BÀI TEST ĐẦU VÀO"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 uppercase">Bước 2: CHẨN BỆNH</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="text-justify text-text-secondary leading-relaxed space-y-4">
                                <p>
                                    Sau khi thực hiện bài test đầu vào theo đúng format IELTS cùng giáo viên chuyên môn tại Xa Lộ English, học viên sẽ được Feedback trực tiếp (sau bài Speaking) và nhận bảng chẩn bệnh chi tiết như hình bên.
                                </p>
                                <p>
                                    Ngoài điểm thành phần và nhận xét chung theo band điểm, học viên sẽ được chấm và nhận xét chi tiết về khả năng sử dụng ngôn ngữ (các thì, cấu trúc câu và Verb/Noun/Adverb/Adjective Phrase) khả năng vận dụng ở các dạng bài ở cả 4 kỹ năng và điểm thành phần từng dạng bài xuất hiện trong bài thi. Và những tiêu chí đánh giá và nhận xét này đều dựa trên tiêu chuẩn chấm thi của bài thi IELTS.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://xalo.edu.vn/image/cache/catalog/services/personalize-plan/moi-ne-600x450.png"
                                    alt="Bước 2: CHẨN BỆNH"
                                    className="w-full h-auto rounded-xl shadow-lg mb-2"
                                />
                                <p className="text-sm text-center text-text-light italic">Minh họa Bảng Chẩn Bệnh của học viên sau khi làm bài kiểm tra đầu vào</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 uppercase">Bước 3: XÂY DỰNG LỘ TRÌNH CHỮA (RLP)</h4>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="text-justify text-text-secondary leading-relaxed">
                                <p>
                                    Ở giai đoạn này, sau khi học viên làm bài test đầu vào và đã được nhận bảng chẩn bệnh. Từ bảng chẩn bệnh, học viên sẽ được biên soạn một lộ trình để giải quyết các vấn đề. Lộ trình này sẽ được thiết kế theo một quy trình đặc biệt dựa trên nguyên lý cộng hưởng (Resonance). Nghĩa là, kiến thức của buổi này sẽ là nền tảng cho buổi sau, nhằm tạo điều kiện cho học viên tiếp thu hiệu quả thông qua việc luyện tập ngay sau đó (Lộ trình này được gọi là lộ trình học tập cộng hưởng - Resonant Lesson Plan)
                                </p>
                            </div>
                            <div className="md:w-1/2 mx-auto">
                                <img
                                    src="https://xalo.edu.vn/image/cache/catalog/rlp-truyen-0x0.png"
                                    alt="Bước 3: XÂY DỰNG LỘ TRÌNH CHỮA (RLP)"
                                    className="w-full h-auto rounded-xl shadow-lg mb-2"
                                />
                                <p className="text-sm text-center text-text-light italic">Minh họa một phần lộ trình cộng hưởng của học sinh</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 uppercase">Bước 4: TIẾN HÀNH DẠY VÀ HỌC</h4>
                        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 items-start">
                            <div className="order-2 md:order-1 lg:col-span-4 flex flex-col items-center">
                                <img
                                    src="https://xalo.edu.vn/image/cache/catalog/services/personalize-plan/teachers-note-340x340.png"
                                    alt="Bước 4: TIẾN HÀNH DẠY VÀ HỌC"
                                    className="w-full max-w-[300px] mx-auto md:mx-0 h-auto rounded-xl shadow-lg mb-2"
                                />
                                <p className="text-sm text-center md:text-left text-text-light italic max-w-[300px] mx-auto md:mx-0">Minh họa một số nhận xét của giáo viên sau mỗi buổi học</p>
                            </div>
                            <div className="text-justify text-text-secondary text-lg leading-relaxed order-1 md:order-2 order-2 md:order-1 lg:col-span-4">
                                <p>
                                    Ở bước này, giáo viên và học viên tiến hành dạy và học theo lộ trình được xây dựng. Giáo viên sẽ liên tục theo sát học viên trong các buổi học, đồng thời ghi lại sự thể hiện của học viên trong lớp và những điểm mạnh, điểm yếu của học sinh. Đây sẽ là cơ sở cho các đánh giá và "tái chẩn bệnh" sau này.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 uppercase">Bước 5: TIẾP TỤC "CHẨN BỆNH"</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="text-justify text-text-secondary leading-relaxed space-y-4">
                                <p>
                                    Vì quá trình học sẽ liên tục phát sinh thêm nhiều vấn đề mới, nên nếu chỉ dựa vào chẩn bệnh ở đầu khóa sẽ không đủ bao quát hết các vấn đề của người học. Do đó, học viên tại Xa Lộ English sẽ tiếp tục được chẩn bệnh trong suốt thời gian học. Việc thực hiện tái chẩn bệnh nhiều lần sẽ giúp giáo viên kịp thời theo dõi sự tiến bộ của học viên trong lớp, từ đó đưa ra định hướng và cách giải quyết kịp thời cho bạn, đảm bảo rằng bạn đang vẫn đi đúng lộ trình và đáp ứng quỹ thời gian đã được đề ra.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://xalo.edu.vn/image/cache/catalog/hinhweb-artboard-1-copy-5-6500x3000.png"
                                    alt="Bước 5: TIẾP TỤC CHẨN BỆNH"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-primary-dark mb-6 uppercase">Bước 6: CUNG CẤP TÀI LIỆU CẢI THIỆN</h4>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="text-justify text-text-secondary leading-relaxed">
                                <p>
                                    Dựa trên kết quả "tái chẩn bệnh", giáo viên sẽ thông qua các vấn đề được tìm ra trong quá trình học của học viên để đưa ra những phương án cải thiện và tài liệu bổ sung kịp thời. Xa Lộ English tin rằng việc thực hiện “chẩn - chữa” bệnh ngay trong quá trình học sẽ truyền động lực học tập đến tất cả học viên, từ đó học viên biết được quá trình tiến bộ của mình, đồng thời tập trung cải thiện những yếu điểm để dần đạt được mục tiêu điểm IELTS.
                                </p>
                            </div>
                            <div className="md:w-1/2 mx-auto">
                                <img
                                    src="https://xalo.edu.vn/image/cache/catalog/tai-lieu-cai-thien-0x0.jpg"
                                    alt="Bước 6: CUNG CẤP TÀI LIỆU CẢI THIỆN"
                                    className="w-full h-auto rounded-xl shadow-lg mb-2"
                                />
                                <p className="text-sm text-center text-text-light italic">Minh họa việc cung cấp tài liệu cải thiện dành cho học viên</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <div className='mx-auto max-w-6xl mt-12 flex items-center'>
                <p><iframe src="https://www.youtube.com/embed/zPMl3XmfkLQ?ab_channel=XaL" width="1200 " height="673" allowfullscreen="allowfullscreen"></iframe></p>
            </div>
            <CTASection />
        </div>
    );
};

export default MethodPage;
