import React, { useState, useEffect } from 'react';
import Section from '../components/common/Section';
import slider_khac from '../assets/slider/sliderKhac.png'
import CTASection from '../components/features/CTASection';
import client from '../api/client';

const SchedulePage = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const { data } = await client.get('/schedules');
        setSchedules(data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  // Group schedules by month
  const groupedSchedules = schedules.reduce((acc, schedule) => {
    const date = new Date(schedule.month);
    const monthKey = `${date.getMonth() + 1}/${date.getFullYear()}`;
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(schedule);
    return acc;
  }, {});

  // Sort months descending (assuming backend sorts by date, but good to be safe or if we want specific order)
  // Backend sorts by date desc, so keys insertion order might be roughly right, but object keys order isn't guaranteed.
  // Let's sort keys based on date parsing.
  // Sort months descending
  const sortedMonths = Object.keys(groupedSchedules).sort((a, b) => {
    const [m1, y1] = a.split('/').map(Number);
    const [m2, y2] = b.split('/').map(Number);
    return new Date(y2, m2 - 1) - new Date(y1, m1 - 1);
  });

  // Filter months based on selection
  const displayedMonths = selectedMonth
    ? sortedMonths.filter(m => m === selectedMonth)
    : sortedMonths;

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-[60vh] mb-16"
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

      <Section className='mt-12'>
        <div className="max-w-5xl mx-auto">
          {/* Month Selector */}
          {!loading && sortedMonths.length > 0 && (
            <div className="flex justify-start mb-12">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <label htmlFor="month-select" className="font-semibold text-gray-700 whitespace-nowrap">
                  Chọn tháng:
                </label>
                <select
                  id="month-select"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 text-gray-800"
                >
                  <option value="">Tất cả các tháng</option>
                  {sortedMonths.map((month) => (
                    <option key={month} value={month}>
                      Tháng {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : displayedMonths.length > 0 ? (
            displayedMonths.map((month) => (
              <div key={month} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-primary-dark mb-8 uppercase tracking-wide">
                  Lịch khai giảng tháng {month}
                </h3>
                <div className="flex flex-col gap-6 items-center">
                  {groupedSchedules[month].map((schedule) => (
                    <div key={schedule._id} className="w-full flex flex-col items-center gap-6">
                      {Array.isArray(schedule.scheduleImgURL) ? (
                        schedule.scheduleImgURL.map((url, idx) => (
                          <img
                            key={`${schedule._id}-${idx}`}
                            src={url}
                            alt={schedule.title || `Lịch khai giảng tháng ${month} - ${idx + 1}`}
                            className="w-full max-w-3xl h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                          />
                        ))
                      ) : (
                        <img
                          key={schedule._id}
                          src={schedule.scheduleImgURL}
                          alt={schedule.title || `Lịch khai giảng tháng ${month}`}
                          className="w-full max-w-3xl h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              Chưa có lịch khai giảng mới.
            </div>
          )}
        </div>

        <div className="text-center">
          <p className="italic text-text-secondary">* Lịch học có thể thay đổi tùy theo tình hình thực tế.</p>
        </div>

        <CTASection />
      </Section>
    </div>
  );
};

export default SchedulePage;
