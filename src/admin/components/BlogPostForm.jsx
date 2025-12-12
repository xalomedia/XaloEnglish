import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import client from '../../api/client';
import RichTextEditor from './RichTextEditor';

const BlogPostForm = ({ post, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        title: '',
        coverImageUrl: '',
        excerpt: '',
        contentHtml: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (post) {
            setFormData({
                title: post.title,
                coverImageUrl: post.coverImageUrl || '',
                excerpt: post.excerpt || '',
                contentHtml: post.contentHtml,
            });
        }
    }, [post]);

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
        if (!imageFile) return formData.coverImageUrl;

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

        let imageUrl = formData.coverImageUrl;
        if (imageFile) {
            imageUrl = await uploadImage();
            if (!imageUrl) return;
        }

        const dataToSubmit = { ...formData, coverImageUrl: imageUrl };

        try {
            if (post) {
                await client.put(`/blog-posts/${post._id}`, dataToSubmit);
            } else {
                await client.post('/blog-posts', dataToSubmit);
            }
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-800">
                        {post ? 'Edit Blog Post' : 'Add New Blog Post'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
                    )}

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Excerpt
                        </label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>



                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Content (HTML/Markdown)
                        </label>
                        <RichTextEditor
                            value={formData.contentHtml}
                            onChange={(data) =>
                                setFormData((prev) => ({ ...prev, contentHtml: data }))
                            }
                            placeholder="Write your blog post content here..."
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cover Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full"
                        />
                        {formData.coverImageUrl && !imageFile && (
                            <img
                                src={formData.coverImageUrl}
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
                            {uploading ? 'Uploading...' : post ? 'Update Post' : 'Create Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogPostForm;
