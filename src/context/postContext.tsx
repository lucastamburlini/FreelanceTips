import { createContext, FC, ReactNode, useContext, useState } from "react";
import { PostsContextValue, Post } from "../types";

const PostContext = createContext<PostsContextValue | null>(null);

export const PostProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const newPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  return (
    <PostContext.Provider value={{ posts, newPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("The Data context must be used within a PostProvider");
  }
  return context;
};
