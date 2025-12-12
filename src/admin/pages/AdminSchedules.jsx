import React, { useState, useEffect } from 'react';
import client from '../../api/client';
import { Plus, Trash2, Calendar } from 'lucide-react';

const AdminSchedules = () => {
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [month, setMonth] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchSchedules();
    }, []);

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

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setImageFiles(files);
        }
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const { data } = await client.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return data.image_url; // Upload endpoint returns { image_url: ... }
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!month || imageFiles.length === 0) {
            alert('Please select a month and at least one image');
            return;
        }

        setUploading(true);
        try {
            const imageUrls = await Promise.all(imageFiles.map(file => uploadImage(file)));
            const validUrls = imageUrls.filter(url => url !== null);

            if (validUrls.length === 0) throw new Error('Image upload failed');

            await client.post('/schedules', {
                month,
                scheduleImgURL: validUrls,
                title
            });

            // Reset form
            setMonth('');
            setImageFiles([]);
            setTitle('');

            // Refresh list
            fetchSchedules();
        } catch (error) {
            console.error('Error creating schedule:', error);
            alert('Failed to create schedule');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this schedule?')) {
            try {
                await client.delete(`/schedules/${id}`);
                setSchedules(schedules.filter(s => s._id !== id));
            } catch (error) {
                console.error('Error deleting schedule:', error);
            }
        }
    };

    // Helper to format month for display
    const formatMonth = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Manage Schedules</h1>

            {/* Create Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-lg font-semibold mb-4">Add New Schedule Image</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Month</label>
                            <input
                                type="month"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title (Optional)</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Lịch khai giảng đợt 1"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Images (Select multiple)</label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="w-full"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={uploading}
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark disabled:opacity-50 flex items-center gap-2"
                    >
                        {uploading ? 'Uploading...' : <><Plus size={18} /> Add Schedule</>}
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {schedules.map((schedule) => (
                            <tr key={schedule._id}>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2 overflow-x-auto max-w-xs">
                                        {Array.isArray(schedule.scheduleImgURL) ? (
                                            schedule.scheduleImgURL.map((url, idx) => (
                                                <img key={idx} src={url} alt={`Schedule ${idx}`} className="h-16 w-auto object-cover rounded flex-shrink-0" />
                                            ))
                                        ) : (
                                            <img src={schedule.scheduleImgURL} alt="Schedule" className="h-16 w-auto object-cover rounded" />
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-gray-400" />
                                        <span className="font-medium">{formatMonth(schedule.month)}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {schedule.title || '-'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => handleDelete(schedule._id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {schedules.length === 0 && !loading && (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                    No schedules found. Add one above.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSchedules;
