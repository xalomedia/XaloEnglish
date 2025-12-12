import { useState, useEffect } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import client from '../../api/client';
import TeacherForm from '../components/TeacherForm';
import TestimonialForm from '../components/TestimonialForm';

const AdminTeachers = () => {
    const [activeTab, setActiveTab] = useState('teachers');
    const [teachers, setTeachers] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showTeacherForm, setShowTeacherForm] = useState(false);
    const [showTestimonialForm, setShowTestimonialForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            if (activeTab === 'teachers') {
                const { data } = await client.get('/teachers');
                setTeachers(data);
            } else {
                const { data } = await client.get('/testimonials');
                setTestimonials(data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await client.delete(`/${activeTab}/${id}`);
                fetchData();
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        if (activeTab === 'teachers') {
            setShowTeacherForm(true);
        } else {
            setShowTestimonialForm(true);
        }
    };

    const handleAddNew = () => {
        setSelectedItem(null);
        if (activeTab === 'teachers') {
            setShowTeacherForm(true);
        } else {
            setShowTestimonialForm(true);
        }
    };

    const handleFormSuccess = () => {
        setShowTeacherForm(false);
        setShowTestimonialForm(false);
        fetchData();
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Quản lý {activeTab === 'teachers' ? 'Giáo viên' : 'Phản hồi'}
                </h1>
                <button
                    onClick={handleAddNew}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
                >
                    <Plus size={20} />
                    Thêm {activeTab === 'teachers' ? 'giáo viên' : 'phản hồi'}
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                    className={`pb-2 px-4 font-medium ${activeTab === 'teachers'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    onClick={() => setActiveTab('teachers')}
                >
                    Giáo viên
                </button>
                <button
                    className={`pb-2 px-4 font-medium ${activeTab === 'testimonials'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    onClick={() => setActiveTab('testimonials')}
                >
                    Phản hồi học viên
                </button>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                                {activeTab === 'teachers' ? (
                                    <>
                                        <th className="px-6 py-4">Giáo viên</th>
                                        <th className="px-6 py-4">Chuyên môn</th>
                                        <th className="px-6 py-4">Bio</th>
                                    </>
                                ) : (
                                    <>
                                        <th className="px-6 py-4">Học viên</th>
                                        <th className="px-6 py-4">Điểm số</th>
                                        <th className="px-6 py-4">Nội dung</th>
                                    </>
                                )}
                                <th className="px-6 py-4 text-right">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {activeTab === 'teachers'
                                ? teachers.map((teacher) => (
                                    <tr
                                        key={teacher._id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                                    <img
                                                        src={teacher.profile_image_url}
                                                        alt={teacher.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <span className="font-medium text-gray-800">
                                                    {teacher.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {teacher.expertise}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 truncate max-w-xs">
                                            {teacher.bio}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(teacher)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(teacher._id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                : testimonials.map((testimonial) => (
                                    <tr
                                        key={testimonial._id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {testimonial.student_name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {testimonial.score_achieved}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 truncate max-w-xs">
                                            {testimonial.testimonial_text}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(testimonial)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(testimonial._id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            {(activeTab === 'teachers' ? teachers : testimonials).length ===
                                0 && (
                                    <tr>
                                        <td colSpan="4" className="text-center py-8 text-gray-500">
                                            No data found.
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            )}

            {showTeacherForm && (
                <TeacherForm
                    teacher={selectedItem}
                    onClose={() => setShowTeacherForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}

            {showTestimonialForm && (
                <TestimonialForm
                    testimonial={selectedItem}
                    onClose={() => setShowTestimonialForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}
        </div>
    );
};

export default AdminTeachers;
