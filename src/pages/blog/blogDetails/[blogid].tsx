// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// interface BlogDetailsProps {
//   _id: string;
//   userId: string;
//   content: string;
//   title: string;
//   image: string;
//   slug: string;
//   banner: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }
// // : React.FC<BlogDetailsProps>
// export default function BlogDetails() {
//   const [blog, setBlog] = useState<BlogDetailsProps | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const router = useRouter();
//   const { blogid } = router.query; // Get the dynamic blog ID from the URL
//   console.log('id', blogid);

//   const fetchBlog = async (id: string) => {
//     if (!id) return;
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-blogs/${id}`
//       );
//       console.log('res', response.data);
//       setBlog(response.data.blog);
//       setLoading(false);
//     } catch (err) {
//       setError('Failed to load blog');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlog(blogid as string);
//   }, [blogid]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   //   const router = useRouter()

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto py-12">
//       {blog?.banner && (
//         <div
//           className="w-full h-64 bg-center bg-cover mb-8"
//           style={{ backgroundImage: `url(${blog.banner})` }}
//         ></div>
//       )}

//       <h1 className="text-4xl font-bold text-center mb-6">{blog?.title}</h1>
//       <div
//         className="prose prose-lg mx-auto"
//         dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
//       ></div>
//     </div>
//   );
// }

// pages/blog/[blogid].tsx

import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import axios from 'axios';
import Layout from '@/component/Layout';

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

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-blogs`
    );
    const blogs = response.data.blogs;

    const paths = blogs.map((blog: { _id: string }) => ({
      params: { blogid: blog._id },
    }));

    return { paths, fallback: false }; // or 'blocking' if you want ISR
  } catch (error) {
    console.error('Error fetching blog IDs:', error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { blogid } = params!;
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-blogs/${blogid}`
    );
    const blog = response.data.blog;

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error('Error fetching blog details:', error);
    return {
      notFound: true,
    };
  }
};

const BlogDetails = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        {blog.banner && (
          <div
            className="w-full h-64 bg-center bg-cover mb-8"
            style={{ backgroundImage: `url(${blog.banner})` }}
          ></div>
        )}
        <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
        <div
          className="prose prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
