export interface User {
  firstName: string;
  id: string;
  lastName: string;
  pictureUrl: string;
}

export interface Post {
  author: string;
  category: string;
  content: string;
  date: string;
  pictureUrl: string;
  postId: string;
  tags: string[];
  title: string;
  userId: string;
}

export interface RandomUser {
  results: RandomUserResult[];
}

export interface RandomUserResult {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

export interface DataContextValue {
  mockPosts: Post[];
  users: User[];
  userSession?: User | null;
  setUserSession: React.Dispatch<React.SetStateAction<User | null>>;
}

export interface PostsContextValue {
  posts: Post[];
  newPost: (post: Post) => void;
}

export interface PrimaryButtonProps {
  onClick?: () => void;
  text: string;
}

export interface SecondaryButtonProps {
  onClick?: () => void;
  text: string;
  type?: "button" | "reset" | "submit";
}
