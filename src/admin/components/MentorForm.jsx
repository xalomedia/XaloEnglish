import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import client from '../../api/client';
import RichTextEditor from './RichTextEditor';

const MentorForm = ({ mentor, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        overall: '',
        slogan_Title: '',
        slogan_Content: '',
        imageUrl: '',
        ieltsImage: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [ieltsImageFile, setIeltsImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (mentor) {
            setFormData({
                name: mentor.name,
                overall: mentor.overall,
                slogan_Title: mentor.slogan_Title,
                slogan_Content: mentor.slogan_Content,
                imageUrl: mentor.imageUrl,
                ieltsImage: mentor.ieltsImage || '',
            });
        }
    }, [mentor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleIeltsImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIeltsImageFile(file);
        }
    };

    const uploadImage = async (file) => {
        if (!file) return null;

        const data = new FormData();
        data.append('image', file);

        try {
            setUploading(true);
            const res = await client.post('/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploading(false);
            return res.data.image_url;
        } catch (err) {
            setUploading(false);
            setError('Image upload failed');
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        let imageUrl = formData.imageUrl;
        if (imageFile) {
            const uploadedUrl = await uploadImage(imageFile);
            if (uploadedUrl) imageUrl = uploadedUrl;
            else return;
        }

        let ieltsImage = formData.ieltsImage;
        if (ieltsImageFile) {
            const uploadedUrl = await uploadImage(ieltsImageFile);
            if (uploadedUrl) ieltsImage = uploadedUrl;
            else return;
        }

        const dataToSubmit = { ...formData, imageUrl, ieltsImage };

        try {
            if (mentor) {
                await client.put(`/mentors/${mentor._id}`, dataToSubmit);
            } else {
                await client.post('/mentors', dataToSubmit);
            }
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-800">
                        {mentor ? 'Edit Mentor' : 'Add New Mentor'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
                    )}

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Overall Score (IELTS)
                        </label>
                        <input
                            type="number"
                            step="0.5"
                            name="overall"
                            value={formData.overall}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Slogan Title
                        </label>
                        <input
                            type="text"
                            name="slogan_Title"
                            value={formData.slogan_Title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Slogan Content
                        </label>
                        <RichTextEditor
                            value={formData.slogan_Content}
                            onChange={(data) =>
                                setFormData((prev) => ({ ...prev, slogan_Content: data }))
                            }
                            placeholder="Enter slogan content..."
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Profile Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full"
                        />
                        {formData.imageUrl && !imageFile && (
                            <img
                                src={formData.imageUrl}
                                alt="Preview"
                                className="mt-2 h-32 object-cover rounded"
                            />
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            IELTS Certificate/Score Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleIeltsImageChange}
                            className="w-full"
                        />
                        {formData.ieltsImage && !ieltsImageFile && (
                            <img
                                src={formData.ieltsImage}
                                alt="IELTS Preview"
                                className="mt-2 h-32 object-cover rounded"
                            />
                        )}
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={uploading}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                        >
                            {uploading ? 'Uploading...' : mentor ? 'Update Mentor' : 'Create Mentor'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MentorForm;
