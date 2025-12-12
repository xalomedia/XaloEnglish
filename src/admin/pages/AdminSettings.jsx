import { useState, useEffect } from 'react';
import client from '../../api/client';

const AdminSettings = () => {
    const [formData, setFormData] = useState({
        phone_number: '',
        email_address: '',
        facebook_link: '',
        meta_title_home: '',
        meta_description_home: '',
        header_script: '',
        body_script: '',
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const { data } = await client.get('/settings');
                if (data) {
                    setFormData({
                        phone_number: data.phone_number || '',
                        email_address: data.email_address || '',
                        facebook_link: data.facebook_link || '',
                        meta_title_home: data.meta_title_home || '',
                        meta_description_home: data.meta_description_home || '',
                        header_script: data.header_script || '',
                        body_script: data.body_script || '',
                    });
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching settings:', error);
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage('');

        try {
            await client.put('/settings', formData);
            setMessage('Settings updated successfully!');
            setSaving(false);
        } catch (error) {
            setMessage('Error updating settings');
            setSaving(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Cấu hình Chung</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                {message && (
                    <div
                        className={`p-4 rounded mb-6 ${message.includes('Error')
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                            }`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email_address"
                                value={formData.email_address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Facebook Link
                            </label>
                            <input
                                type="url"
                                name="facebook_link"
                                value={formData.facebook_link}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">SEO Homepage</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Meta Title
                            </label>
                            <input
                                type="text"
                                name="meta_title_home"
                                value={formData.meta_title_home}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Meta Description
                            </label>
                            <textarea
                                name="meta_description_home"
                                value={formData.meta_description_home}
                                onChange={handleChange}
                                rows="3"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Header Script (Google Tag Manager, Analytics...)
                            </label>
                            <textarea
                                name="header_script"
                                value={formData.header_script}
                                onChange={handleChange}
                                rows="5"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 font-mono text-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="<script>...</script>"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Body Script (GTM NoScript...)
                            </label>
                            <textarea
                                name="body_script"
                                value={formData.body_script}
                                onChange={handleChange}
                                rows="5"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 font-mono text-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="<noscript>...</noscript>"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                            {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminSettings;
