import { useData } from "../context/userContext";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import NewPost from "../components/NewPost";
import { usePosts } from "../context/postContext";

const Blog: React.FC = () => {
  const { mockPosts } = useData();
  const { posts } = usePosts();
  const [showPosts, setShowPosts] = useState<number>(10);
  const [totalPosts, setTotalPosts] = useState<number>(mockPosts.length);

  const sortedPost = [...mockPosts, ...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, showPosts);

  console.log(sortedPost);
  

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMorePosts = () => {
    const remainingPosts = totalPosts - showPosts;
    if (remainingPosts > 0) {
      const nextPostsToShow = Math.min(remainingPosts, 10);
      setShowPosts(showPosts + nextPostsToShow);
    }
  };

  useEffect(() => {
    setTotalPosts(mockPosts.length);
  }, [mockPosts.length]);

  return (
    <section className="mx-auto py-14 max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-10">
      <NewPost />

      <div>
        <ul role="list" className="flex flex-col gap-10">
          {sortedPost.map((post, index) => (
            <li
              key={index}
              className="flex flex-col justify-between p-5 bg-white border border-gray-300 rounded"
            >
              <div className="flex justify-between mb-5 gap-1">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50 hidden md:block"
                    src={post.pictureUrl}
                    alt=""
                  />

                  <div className="min-w-0 flex-auto flex flex-col justify-center ">
                    <p className="font-semibold leading-6 text-gray-900">
                      {post.title}
                    </p>
                    <p className=" text-sm leading-5 text-gray-500">
                      By {post.author}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="mt-1 text-xs leading-5 text-gray-500 bg-green-300 px-2 rounded">
                    {post.category}
                  </p>
                  <div className="text-right">
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Published on{" "}
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-2 flex flex-col">
                <p className="mt-1  leading-5 text-gray-500 mb-5">
                  {post.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showPosts >= totalPosts ? (
        <div>
          <span className="relative flex justify-center bg-white">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6">
              That's all for now!
            </span>
          </span>

          <PrimaryButton text={"Up!"} onClick={handleScrollToTop} />
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <button
            className="group relative inline-block focus:outline-none focus:ring-0"
            onClick={handleMorePosts}
            disabled={showPosts >= totalPosts}
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 rounded bg-green-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

            <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
              See more posts
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
