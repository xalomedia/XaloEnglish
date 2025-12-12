import { useState, useEffect } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import client from '../../api/client';
import BlogPostForm from '../components/BlogPostForm';

const AdminBlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);

    const fetchPosts = async (pageNumber = 1) => {
        try {
            const { data } = await client.get(`/blog-posts?pageNumber=${pageNumber}`);
            setPosts(data.posts);
            setPage(data.page);
            setPages(data.pages);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await client.delete(`/blog-posts/${id}`);
                fetchPosts(page);
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        }
    };

    const handleEdit = (post) => {
        setSelectedPost(post);
        setShowForm(true);
    };

    const handleAddNew = () => {
        setSelectedPost(null);
        setShowForm(true);
    };

    const handleFormSuccess = () => {
        setShowForm(false);
        fetchPosts(page);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Quản lý Tin tức (Blog Posts)</h1>
                <button
                    onClick={handleAddNew}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors"
                >
                    <Plus size={20} />
                    Thêm bài viết
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                            <th className="px-6 py-4">Tiêu đề</th>
                            <th className="px-6 py-4">Ngày tạo</th>
                            <th className="px-6 py-4 text-right">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {posts.map((post) => (
                            <tr key={post._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-800">
                                    {post.title}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleEdit(post)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post._id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan="3" className="text-center py-8 text-gray-500">
                                    No blog posts found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {pages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                    {[...Array(pages).keys()].map((x) => (
                        <button
                            key={x + 1}
                            onClick={() => fetchPosts(x + 1)}
                            className={`px-3 py-1 rounded ${page === x + 1
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {x + 1}
                        </button>
                    ))}
                </div>
            )}

            {showForm && (
                <BlogPostForm
                    post={selectedPost}
                    onClose={() => setShowForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}
        </div>
    );
};

export default AdminBlogPosts;
