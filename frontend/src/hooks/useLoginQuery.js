import { useState, useEffect } from 'react';

const useLoginQuery = (username, password) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/posts?username=${username}&password=${password}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [username, password]);

    return { data, error };
};

export default useLoginQuery;