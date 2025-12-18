import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../api/client';
import Section from '../components/common/Section';
import { Calendar, User, Clock } from 'lucide-react';

const NewsDetailsPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await client.get(`/blog-posts/${slug}`);
                setPost(data);
            } catch (err) {
                console.error('Error fetching blog post:', err);
                setError('Không tìm thấy bài viết');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="pt-32 pb-20 text-center min-h-[60vh]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || 'Bài viết không tồn tại'}</h2>
                <a href="/news" className="text-primary hover:underline">Quay lại trang tin tức</a>
            </div>
        );
    }

    return (
        <div className="pt-20 bg-gray-50 min-h-screen mt-20">
            <article className="bg-white">
                {/* Header / Cover Image */}
                {post.coverImageUrl && (
                    <div className="w-full h-[400px] relative">
                        <img
                            src={post.coverImageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                )}

                <div className="container mx-auto px-4 -mt-20 relative z-10">
                    <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-8 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>{new Date(post.createdAt).toLocaleDateString('vi-VN')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span>Admin</span>
                            </div>
                            {/* Optional: Add reading time estimate if available */}
                        </div>

                        <div
                            className="prose prose-lg max-w-none prose-headings:text-primary-dark prose-a:text-primary prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                        />
                    </div>
                </div>
            </article>

            <Section className="py-16">
                <div className="text-center">
                    <a href="/news" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-colors">
                        Xem thêm tin tức khác
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default NewsDetailsPage;
