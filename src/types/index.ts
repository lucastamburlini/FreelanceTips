export interface User {
  id: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

export interface Post {
  postId: string;
  userId: string;
  author: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  pictureUrl: string;
  category: string;
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
  users: User[];
  posts: Post[];
}
