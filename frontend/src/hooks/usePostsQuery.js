import axios from 'axios';
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8000/api';

const usePostsQuery = (sortBy = null) => {
const usePostsQuery = (sortBy = null) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            // await new Promise((resolve) => setTimeout(resolve, 5000));
            try {
                let url = `${API_URL}/posts`;
                // if (sortBy) {
                //     url += `?_sort=${sortBy}`;
                // }
                const response = await axios.get(url);
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, [sortBy]);
    }, [sortBy]);

    return { posts, loading, error };
};

export default usePostsQuery;