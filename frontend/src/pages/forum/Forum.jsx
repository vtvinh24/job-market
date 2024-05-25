import React from 'react';
import usePostsQuery from '../hooks/usePostsQuery';
import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HomeFooter';

const Forum = () => {
    const { posts, loading, error } = usePostsQuery();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <HomeNavbar />
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
            <HomeFooter />
        </div>
    );
};

export default Forum;