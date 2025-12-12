import { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import client from '../../api/client';

const ProgramTrackForm = ({ track, groups, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        group: '',
        name: '',
        slug: '',
        description: '',
        order: 0,
        entryBandText: '',
        exitBandText: '',
        durationText: '',
        detailIllustrationUrl: '',
        targetAudience: [],
        syllabusItems: [],
        formats: [],
        courseLink: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (track) {
            setFormData({
                group: track.group._id || track.group,
                name: track.name,
                slug: track.slug,
                description: track.description || '',
                order: track.order,
                entryBandText: track.entryBandText || '',
                exitBandText: track.exitBandText || '',
                durationText: track.durationText || '',
                detailIllustrationUrl: track.detailIllustrationUrl || '',
                targetAudience: track.targetAudience || [],
                syllabusItems: track.syllabusItems || [],
                formats: track.formats || [],
                courseLink: track.courseLink || '',
            });
        } else if (groups.length > 0) {
            setFormData((prev) => ({ ...prev, group: groups[0]._id }));
        }
    }, [track, groups]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormatChange = (format) => {
        setFormData((prev) => {
            const newFormats = prev.formats.includes(format)
                ? prev.formats.filter((f) => f !== format)
                : [...prev.formats, format];
            return { ...prev, formats: newFormats };
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const uploadImage = async () => {
        if (!imageFile) return formData.detailIllustrationUrl;

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

    // --- Target Audience Helpers ---
    const addTargetAudience = () => {
        setFormData((prev) => ({
            ...prev,
            targetAudience: [...prev.targetAudience, { title: '', bullets: [''] }],
        }));
    };

    const updateTargetAudience = (index, field, value) => {
        const newAudience = [...formData.targetAudience];
        newAudience[index][field] = value;
        setFormData((prev) => ({ ...prev, targetAudience: newAudience }));
    };

    const removeTargetAudience = (index) => {
        const newAudience = formData.targetAudience.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, targetAudience: newAudience }));
    };

    const addAudienceBullet = (audienceIndex) => {
        const newAudience = [...formData.targetAudience];
        newAudience[audienceIndex].bullets.push('');
        setFormData((prev) => ({ ...prev, targetAudience: newAudience }));
    };

    const updateAudienceBullet = (audienceIndex, bulletIndex, value) => {
        const newAudience = [...formData.targetAudience];
        newAudience[audienceIndex].bullets[bulletIndex] = value;
        setFormData((prev) => ({ ...prev, targetAudience: newAudience }));
    };

    const removeAudienceBullet = (audienceIndex, bulletIndex) => {
        const newAudience = [...formData.targetAudience];
        newAudience[audienceIndex].bullets = newAudience[audienceIndex].bullets.filter(
            (_, i) => i !== bulletIndex
        );
        setFormData((prev) => ({ ...prev, targetAudience: newAudience }));
    };

    // --- Syllabus Helpers ---
    const addSyllabusItem = () => {
        setFormData((prev) => ({
            ...prev,
            syllabusItems: [
                ...prev.syllabusItems,
                { code: '', title: '', description: '', bullets: [''] },
            ],
        }));
    };

    const updateSyllabusItem = (index, field, value) => {
        const newSyllabus = [...formData.syllabusItems];
        newSyllabus[index][field] = value;
        setFormData((prev) => ({ ...prev, syllabusItems: newSyllabus }));
    };

    const removeSyllabusItem = (index) => {
        const newSyllabus = formData.syllabusItems.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, syllabusItems: newSyllabus }));
    };

    const addSyllabusBullet = (syllabusIndex) => {
        const newSyllabus = [...formData.syllabusItems];
        newSyllabus[syllabusIndex].bullets.push('');
        setFormData((prev) => ({ ...prev, syllabusItems: newSyllabus }));
    };

    const updateSyllabusBullet = (syllabusIndex, bulletIndex, value) => {
        const newSyllabus = [...formData.syllabusItems];
        newSyllabus[syllabusIndex].bullets[bulletIndex] = value;
        setFormData((prev) => ({ ...prev, syllabusItems: newSyllabus }));
    };

    const removeSyllabusBullet = (syllabusIndex, bulletIndex) => {
        const newSyllabus = [...formData.syllabusItems];
        newSyllabus[syllabusIndex].bullets = newSyllabus[syllabusIndex].bullets.filter(
            (_, i) => i !== bulletIndex
        );
        setFormData((prev) => ({ ...prev, syllabusItems: newSyllabus }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        let imageUrl = formData.detailIllustrationUrl;
        if (imageFile) {
            imageUrl = await uploadImage();
            if (!imageUrl) return;
        }

        const dataToSubmit = { ...formData, detailIllustrationUrl: imageUrl };

        try {
            if (track) {
                await client.put(`/programs/tracks/${track._id}`, dataToSubmit);
            } else {
                await client.post('/programs/tracks', dataToSubmit);
            }
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold text-gray-800">
                        {track ? 'Edit Program Track' : 'Add Program Track'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Program Group
                            </label>
                            <select
                                name="group"
                                value={formData.group}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Group</option>
                                {groups.map((g) => (
                                    <option key={g._id} value={g._id}>
                                        {g.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Track Name
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

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Slug
                            </label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="3"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Order
                            </label>
                            <input
                                type="number"
                                name="order"
                                value={formData.order}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Entry Band Text
                            </label>
                            <input
                                type="text"
                                name="entryBandText"
                                value={formData.entryBandText}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Exit Band Text
                            </label>
                            <input
                                type="text"
                                name="exitBandText"
                                value={formData.exitBandText}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Duration Text
                            </label>
                            <input
                                type="text"
                                name="durationText"
                                value={formData.durationText}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Course Link (Optional)
                            </label>
                            <input
                                type="text"
                                name="courseLink"
                                value={formData.courseLink}
                                onChange={handleChange}
                                placeholder="e.g., https://example.com or /custom-path"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>



                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Available Formats
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.formats.includes('Online')}
                                    onChange={() => handleFormatChange('Online')}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Online</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.formats.includes('Offline')}
                                    onChange={() => handleFormatChange('Offline')}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Offline</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Detail Illustration Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full"
                        />
                        {formData.detailIllustrationUrl && !imageFile && (
                            <img
                                src={formData.detailIllustrationUrl}
                                alt="Preview"
                                className="mt-2 h-32 object-cover rounded"
                            />
                        )}
                    </div>

                    {/* Target Audience Section */}
                    <div className="mb-6 border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Target Audience</h3>
                            <button
                                type="button"
                                onClick={addTargetAudience}
                                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                            >
                                <Plus size={16} /> Add Audience
                            </button>
                        </div>
                        {formData.targetAudience.map((audience, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 relative">
                                <button
                                    type="button"
                                    onClick={() => removeTargetAudience(index)}
                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                >
                                    <Trash2 size={16} />
                                </button>
                                <div className="mb-2">
                                    <label className="block text-xs font-medium text-gray-500 uppercase">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={audience.title}
                                        onChange={(e) =>
                                            updateTargetAudience(index, 'title', e.target.value)
                                        }
                                        className="w-full border border-gray-300 rounded px-2 py-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">
                                        Bullets
                                    </label>
                                    {audience.bullets.map((bullet, bIndex) => (
                                        <div key={bIndex} className="flex gap-2 mb-1">
                                            <input
                                                type="text"
                                                value={bullet}
                                                onChange={(e) =>
                                                    updateAudienceBullet(index, bIndex, e.target.value)
                                                }
                                                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeAudienceBullet(index, bIndex)}
                                                className="text-red-400 hover:text-red-600"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addAudienceBullet(index)}
                                        className="text-xs text-blue-600 hover:underline mt-1"
                                    >
                                        + Add Bullet
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Syllabus Section */}
                    <div className="mb-6 border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Syllabus</h3>
                            <button
                                type="button"
                                onClick={addSyllabusItem}
                                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                            >
                                <Plus size={16} /> Add Syllabus Item
                            </button>
                        </div>
                        {formData.syllabusItems.map((item, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 relative">
                                <button
                                    type="button"
                                    onClick={() => removeSyllabusItem(index)}
                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                >
                                    <Trash2 size={16} />
                                </button>
                                <div className="grid grid-cols-2 gap-4 mb-2">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase">
                                            Code
                                        </label>
                                        <input
                                            type="text"
                                            value={item.code}
                                            onChange={(e) =>
                                                updateSyllabusItem(index, 'code', e.target.value)
                                            }
                                            className="w-full border border-gray-300 rounded px-2 py-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            value={item.title}
                                            onChange={(e) =>
                                                updateSyllabusItem(index, 'title', e.target.value)
                                            }
                                            className="w-full border border-gray-300 rounded px-2 py-1"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-xs font-medium text-gray-500 uppercase">
                                        Description
                                    </label>
                                    <textarea
                                        value={item.description}
                                        onChange={(e) =>
                                            updateSyllabusItem(index, 'description', e.target.value)
                                        }
                                        rows="2"
                                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 uppercase mb-1">
                                        Bullets
                                    </label>
                                    {item.bullets.map((bullet, bIndex) => (
                                        <div key={bIndex} className="flex gap-2 mb-1">
                                            <input
                                                type="text"
                                                value={bullet}
                                                onChange={(e) =>
                                                    updateSyllabusBullet(index, bIndex, e.target.value)
                                                }
                                                className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeSyllabusBullet(index, bIndex)}
                                                className="text-red-400 hover:text-red-600"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addSyllabusBullet(index)}
                                        className="text-xs text-blue-600 hover:underline mt-1"
                                    >
                                        + Add Bullet
                                    </button>
                                </div>
                            </div>
                        ))}
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
                            {uploading ? 'Uploading...' : track ? 'Update Track' : 'Create Track'}
                        </button>
                    </div>
                </form >
            </div >
        </div >
    );
};

export default ProgramTrackForm;
