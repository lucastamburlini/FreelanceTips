import { useState } from "react";
import Swal from "sweetalert2";
import Spinner from "./Spinner";
import SecondaryButton from "./buttons/SecondaryButton";
import PrimaryButton from "./buttons/PrimaryButton";
import { useData } from "../context/userContext";
import { v4 } from "uuid";
import { usePosts } from "../context/postContext";

const NewPost: React.FC = () => {
  const { userSession } = useData();
  const { newPost } = usePosts();
  const [isSending, setIsSending] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const userFirstName = userSession?.firstName || "";
  const userLastName = userSession?.lastName || "";
  const userPictureUrl = userSession?.pictureUrl || "";
  const userId = userSession?.id || "";
  const currentDate = new Date().toString();

  const [dataPost, setDataPost] = useState<{
    author: string;
    category: string;
    content: string;
    date: string;
    pictureUrl: string;
    postId: string;
    title: string;
    userId: string;
  }>({
    author: `${userFirstName} ${userLastName}`,
    category: "",
    content: "",
    date: currentDate,
    pictureUrl: userPictureUrl,
    postId: v4(),
    title: "",
    userId: userId,
  });

  const resetDataPost = () => {
    setDataPost({
      author: `${userFirstName} ${userLastName}`,
      category: "",
      content: "",
      date: currentDate,
      pictureUrl: userPictureUrl,
      postId: v4(),
      title: "",
      userId: userId,
    });
  };

  const sendNewPost = () => {
    setIsSending(true);

    Swal.fire({
      title: "Do you want to send this message?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Send",
      reverseButtons: true,
      customClass: {
        popup: "swal2",
      },
    })
      .then((result) => {
        if (result.isConfirmed) {
          newPost(dataPost);
          setIsSending(false);
          setIsFormVisible(false);
          resetDataPost();

          Swal.fire("Success!", "Your post has been submitted.", "success");
        } else {
          setIsSending(false);
        }
      })
      .catch((error) => {
        setIsSending(false);
        Swal.fire(
          "Error!",
          "An error occurred while sending the post.",
          "error"
        );
        console.error("Error sending post:", error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setDataPost((prevDataPost) => ({
      ...prevDataPost,
      [name]: value,
    }));
  };

  const postCategory: string[] = [
    "Billing",
    "Tips",
    "Prices",
    "Clients",
    "Marketing",
    "Productivity",
    "Legal",
    "Tools",
    "Inspiration",
    "Experiences",
  ];

  return (
    <div>
      {!isFormVisible ? (
        <div className="flex w-full items-center justify-center">
          <PrimaryButton
            text="New Post"
            onClick={() => setIsFormVisible(true)}
          />
        </div>
      ) : (
        <div className="flex w-full pb-5 items-center justify-center">
          <button
            onClick={() => {
              setIsFormVisible(false);
              resetDataPost();
            }}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-red-600 focus:outline-none hover:text-white transition-colors duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      {isFormVisible && (
        <div className="bg-white border border-gray-300 rounded p-8 lg:col-span-3 lg:p-12">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                  placeholder="Title"
                  type="title"
                  id="title"
                  name="title"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="Category" className="sr-only">
                  Category
                </label>
                <div>
                  <select
                    id="category"
                    name="category"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Category</option>
                    {postCategory.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="content">
                Message...
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                placeholder="Write your message here..."
                id="content"
                name="content"
                required
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex w-full items-center justify-center">
              {isSending ? (
                <Spinner />
              ) : (
                <SecondaryButton onClick={sendNewPost} text={"Post"} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPost;
