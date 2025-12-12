import { useState, useEffect } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import client from '../../api/client';
import StudentResultForm from '../components/StudentResultForm';

const AdminStudentResults = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [selectedResult, setSelectedResult] = useState(null);

    const fetchResults = async () => {
        try {
            const { data } = await client.get('/student-results');
            setResults(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching student results:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this result?')) {
            try {
                await client.delete(`/student-results/${id}`);
                fetchResults();
            } catch (error) {
                console.error('Error deleting result:', error);
            }
        }
    };

    const handleEdit = (result) => {
        setSelectedResult(result);
        setShowForm(true);
    };

    const handleAddNew = () => {
        setSelectedResult(null);
        setShowForm(true);
    };

    const handleFormSuccess = () => {
        setShowForm(false);
        fetchResults();
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Quản lý Kết quả học viên (Student Results)
                </h1>
                <button
                    onClick={handleAddNew}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
                >
                    <Plus size={20} />
                    Thêm kết quả
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                            <th className="px-6 py-4">Học viên</th>
                            <th className="px-6 py-4">Lớp</th>
                            <th className="px-6 py-4">Overall</th>
                            <th className="px-6 py-4">Input</th>
                            <th className="px-6 py-4 text-right">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {results.map((result) => (
                            <tr key={result._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {result.name}
                                </td>
                                <td className="px-6 py-4 text-gray-600">{result.className}</td>
                                <td className="px-6 py-4 text-gray-600 font-bold">
                                    {Number(result.overall).toFixed(1)}
                                </td>
                                <td className="px-6 py-4 text-gray-600">{result.inputScore}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleEdit(result)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(result._id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {results.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-8 text-gray-500">
                                    No student results found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showForm && (
                <StudentResultForm
                    result={selectedResult}
                    onClose={() => setShowForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}
        </div>
    );
};

export default AdminStudentResults;
