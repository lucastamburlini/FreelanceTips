import { useState } from "react";
import Swal from "sweetalert2";
import Spinner from "./Spinner";
import SecondaryButton from "./buttons/SecondaryButton";
import PrimaryButton from "./buttons/PrimaryButton";

const NewPost: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const newPost = () => {
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      Swal.fire("Success!", "Your post has been submitted.", "success");
      setIsFormVisible(false);
    }, 2000);
  };

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
            onClick={() => setIsFormVisible(false)}
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
            <div>
              <label className="sr-only">Post Title</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                placeholder="Post Title"
                type="text"
                id="postTitle"
                name="postTitle"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message...
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                placeholder="Message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <div className="flex w-full items-center justify-center">
              {isSending ? (
                <Spinner />
              ) : (
                <SecondaryButton onClick={newPost} text={"Post"} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPost;
