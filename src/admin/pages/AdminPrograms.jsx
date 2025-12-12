import { useState, useEffect } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import client from '../../api/client';
import ProgramGroupForm from '../components/ProgramGroupForm';
import ProgramTrackForm from '../components/ProgramTrackForm';

const AdminPrograms = () => {
    const [activeTab, setActiveTab] = useState('groups');
    const [groups, setGroups] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showGroupForm, setShowGroupForm] = useState(false);
    const [showTrackForm, setShowTrackForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const groupsRes = await client.get('/programs/groups');
            setGroups(groupsRes.data);

            if (activeTab === 'tracks') {
                const tracksRes = await client.get('/programs/tracks');
                setTracks(tracksRes.data);
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
                await client.delete(`/programs/${activeTab}/${id}`);
                fetchData();
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        if (activeTab === 'groups') {
            setShowGroupForm(true);
        } else {
            setShowTrackForm(true);
        }
    };

    const handleAddNew = () => {
        setSelectedItem(null);
        if (activeTab === 'groups') {
            setShowGroupForm(true);
        } else {
            setShowTrackForm(true);
        }
    };

    const handleFormSuccess = () => {
        setShowGroupForm(false);
        setShowTrackForm(false);
        fetchData();
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Quản lý Chương trình học
                </h1>
                <button
                    onClick={handleAddNew}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
                >
                    <Plus size={20} />
                    Thêm {activeTab === 'groups' ? 'nhóm' : 'lộ trình'}
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                    className={`pb-2 px-4 font-medium ${activeTab === 'groups'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    onClick={() => setActiveTab('groups')}
                >
                    Nhóm chương trình (Groups)
                </button>
                <button
                    className={`pb-2 px-4 font-medium ${activeTab === 'tracks'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    onClick={() => setActiveTab('tracks')}
                >
                    Lộ trình học (Tracks)
                </button>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                                {activeTab === 'groups' ? (
                                    <>
                                        <th className="px-6 py-4">Tên nhóm</th>
                                        <th className="px-6 py-4">Slug</th>
                                        <th className="px-6 py-4">Thứ tự</th>
                                    </>
                                ) : (
                                    <>
                                        <th className="px-6 py-4">Tên lộ trình</th>
                                        <th className="px-6 py-4">Thuộc nhóm</th>
                                        <th className="px-6 py-4">Slug</th>
                                        <th className="px-6 py-4">Thứ tự</th>
                                    </>
                                )}
                                <th className="px-6 py-4 text-right">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {activeTab === 'groups'
                                ? groups.map((group) => (
                                    <tr
                                        key={group._id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {group.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{group.slug}</td>
                                        <td className="px-6 py-4 text-gray-600">{group.order}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(group)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(group._id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                : tracks.map((track) => (
                                    <tr
                                        key={track._id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {track.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {track.group?.name || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{track.slug}</td>
                                        <td className="px-6 py-4 text-gray-600">{track.order}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEdit(track)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(track._id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            {(activeTab === 'groups' ? groups : tracks).length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-8 text-gray-500">
                                        No data found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {showGroupForm && (
                <ProgramGroupForm
                    group={selectedItem}
                    onClose={() => setShowGroupForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}

            {showTrackForm && (
                <ProgramTrackForm
                    track={selectedItem}
                    groups={groups}
                    onClose={() => setShowTrackForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}
        </div>
    );
};

export default AdminPrograms;
