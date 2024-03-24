import {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  ReactNode,
} from "react";
import {
  User,
  DataContextValue,
  RandomUser,
  RandomUserResult,
  Post,
} from "../types";
import { getUser } from "../utils/getUser";
import { faker } from "@faker-js/faker";

const DataContext = createContext<DataContextValue | null>(null);

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [mockPosts, setMockPosts] = useState<Post[]>([]);
  const [userSession, setUserSession] = useState<User | null>(null);

  useEffect(() => {
    getUser("https://randomuser.me/api/?results=15").then(
      (data: RandomUser) => {
        const userData = data.results.map((user: RandomUserResult) => ({
          id: user.login.uuid,
          firstName: user.name.first,
          lastName: user.name.last,
          pictureUrl: user.picture.large,
        }));

        setUsers(userData);

        /* Creo un Post random pero no es lo mejor, es sólo a modo de ejemplo */

        const randomPosts: Post[] = [];
        for (let i = 0; i < userData.length; i++) {
          const post: Post = {
            postId: i.toString(),
            userId: userData[i].id,
            author: `${userData[i].firstName} ${userData[i].lastName}`,
            pictureUrl: userData[i].pictureUrl,
            date: new Date().toString(),
            title: faker.lorem.words(3),
            category: faker.lorem.words(1),
            content: faker.lorem.paragraphs(3),
            tags: ["tag1", "tag2", "tag3"],
          };
          randomPosts.push(post);
        }

        setMockPosts(randomPosts);
      }
    );
  }, []);

  return (
    <DataContext.Provider value={{ users, mockPosts, userSession, setUserSession }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("The Data context must be used within a DataProvider");
  }
  return context;
};
