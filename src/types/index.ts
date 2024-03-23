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
  posts: Post[];
  users: User[];
  userSession?: User | null;
  setUserSession: React.Dispatch<React.SetStateAction<User | null>>;
}
