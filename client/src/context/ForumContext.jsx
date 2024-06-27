import { createContext } from "react";

const ForumContext = createContext({});

const ForumProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPostID, setSelectedPostID] = useState(null);
  const [seletecdPost, setSelectedPost] = useState(null);
  return (
    <ForumContext.Provider
      value={{
        posts,
        setPosts,
        loading,
        setLoading,
        selectedPostID,
        setSelectedPostID,
        seletecdPost,
        setSelectedPost,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export { ForumContext, ForumProvider };
