import { useState, useEffect } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import client from '../../api/client';
import MentorForm from '../components/MentorForm';

const AdminMentors = () => {
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [selectedMentor, setSelectedMentor] = useState(null);

    const fetchMentors = async () => {
        try {
            const { data } = await client.get('/mentors');
            setMentors(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching mentors:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMentors();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this mentor?')) {
            try {
                await client.delete(`/mentors/${id}`);
                fetchMentors();
            } catch (error) {
                console.error('Error deleting mentor:', error);
            }
        }
    };

    const handleEdit = (mentor) => {
        setSelectedMentor(mentor);
        setShowForm(true);
    };

    const handleAddNew = () => {
        setSelectedMentor(null);
        setShowForm(true);
    };

    const handleFormSuccess = () => {
        setShowForm(false);
        fetchMentors();
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Quản lý Giáo viên (Mentors)</h1>
                <button
                    onClick={handleAddNew}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
                >
                    <Plus size={20} />
                    Thêm giáo viên
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                            <th className="px-6 py-4">Tên</th>
                            <th className="px-6 py-4">Overall</th>
                            <th className="px-6 py-4">Slogan</th>
                            <th className="px-6 py-4 text-right">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {mentors.map((mentor) => (
                            <tr key={mentor._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={mentor.imageUrl}
                                            alt={mentor.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        {mentor.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{mentor.overall}</td>
                                <td className="px-6 py-4 text-gray-600">{mentor.slogan_Title}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleEdit(mentor)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(mentor._id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {mentors.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center py-8 text-gray-500">
                                    No mentors found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showForm && (
                <MentorForm
                    mentor={selectedMentor}
                    onClose={() => setShowForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}
        </div>
    );
};

export default AdminMentors;
