import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface BlogDetailsProps {
    _id: string;
    userId: string;
    content: string;
    title: string;
    image: string;
    slug: string;
    banner: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const BlogDetails: React.FC<BlogDetailsProps> = () => {
    const [blog, setBlog] = useState<BlogDetailsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const { blogid } = router.query;  // Get the dynamic blog ID from the URL
    console.log("id", blogid)


    const fetchBlog = async (id: string) => {
        if (!id) return;
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-blogs/${id}`);
            console.log("res", response.data)
            setBlog(response.data.blog);
            setLoading(false);
        } catch (err) {
            setError('Failed to load blog');
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchBlog(blogid as string);

    }, [blogid]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="max-w-4xl mx-auto py-12">


            {blog?.banner && (
                <div
                    className="w-full h-64 bg-center bg-cover mb-8"
                    style={{ backgroundImage: `url(${blog.banner})` }}
                ></div>
            )}

            <h1 className="text-4xl font-bold text-center mb-6">{blog?.title}</h1>
            <div className="prose prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: blog?.content || '' }}></div>
        </div>
    );
};

export default BlogDetails;
