import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';

// @desc    Fetch all blogs with pagination
// @route   GET /api/v1/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    const count = await Blog.countDocuments({});
    const blogs = await Blog.find({})
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ createdAt: -1 });

    res.json({ blogs, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch latest 3 blogs
// @route   GET /api/v1/blogs/latest
// @access  Public
const getLatestBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).limit(3);
    res.json(blogs);
});

// @desc    Fetch single blog by slug
// @route   GET /api/v1/blogs/:slug
// @access  Public
const getBlogBySlug = asyncHandler(async (req, res) => {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (blog) {
        res.json(blog);
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
});

// @desc    Create a blog
// @route   POST /api/v1/blogs
// @access  Private/Admin
const createBlog = asyncHandler(async (req, res) => {
    const { title, content, image_url, meta_title, meta_description } = req.body;

    const blog = new Blog({
        title,
        content,
        image_url,
        meta_title,
        meta_description,
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
});

// @desc    Update a blog
// @route   PUT /api/v1/blogs/:id
// @access  Private/Admin
const updateBlog = asyncHandler(async (req, res) => {
    const { title, content, image_url, meta_title, meta_description } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (blog) {
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.image_url = image_url || blog.image_url;
        blog.meta_title = meta_title || blog.meta_title;
        blog.meta_description = meta_description || blog.meta_description;

        const updatedBlog = await blog.save();
        res.json(updatedBlog);
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
});

// @desc    Delete a blog
// @route   DELETE /api/v1/blogs/:id
// @access  Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
        await blog.deleteOne();
        res.json({ message: 'Blog removed' });
    } else {
        res.status(404);
        throw new Error('Blog not found');
    }
});

export {
    getBlogs,
    getLatestBlogs,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
};
