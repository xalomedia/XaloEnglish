import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import client from '../../api/client';

const TestimonialForm = ({ testimonial, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        student_name: '',
        score_achieved: '',
        testimonial_text: '',
        certificate_image_url: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (testimonial) {
            setFormData({
                student_name: testimonial.student_name,
                score_achieved: testimonial.score_achieved,
                testimonial_text: testimonial.testimonial_text,
                certificate_image_url: testimonial.certificate_image_url || '',
            });
        }
    }, [testimonial]);

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

    const uploadImage = async () => {
        if (!imageFile) return formData.certificate_image_url;

        const data = new FormData();
        data.append('image', imageFile);

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

        let imageUrl = formData.certificate_image_url;
        if (imageFile) {
            imageUrl = await uploadImage();
            if (!imageUrl) return;
        }

        const dataToSubmit = { ...formData, certificate_image_url: imageUrl };

        try {
            if (testimonial) {
                await client.put(`/testimonials/${testimonial._id}`, dataToSubmit);
            } else {
                await client.post('/testimonials', dataToSubmit);
            }
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-800">
                        {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
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
                            Student Name
                        </label>
                        <input
                            type="text"
                            name="student_name"
                            value={formData.student_name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Score Achieved
                        </label>
                        <input
                            type="text"
                            name="score_achieved"
                            value={formData.score_achieved}
                            onChange={handleChange}
                            placeholder="e.g. IELTS 8.0"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Testimonial Text
                        </label>
                        <textarea
                            name="testimonial_text"
                            value={formData.testimonial_text}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Certificate Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full"
                        />
                        {formData.certificate_image_url && !imageFile && (
                            <img
                                src={formData.certificate_image_url}
                                alt="Preview"
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
                            {uploading ? 'Uploading...' : testimonial ? 'Update Testimonial' : 'Create Testimonial'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TestimonialForm;
