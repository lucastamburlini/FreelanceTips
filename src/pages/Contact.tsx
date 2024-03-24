import emailjs from "emailjs-com";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner";
import SecondaryButton from "../components/buttons/SecondaryButton";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

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
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm(serviceId, templateId, form, userId)
          .then(
            () => {
              Swal.fire({
                title: "The message has been sent successfully.",
                icon: "success",
                customClass: {
                  popup: "swal2",
                },
              });
              form.reset();
            },
            () => {
              Swal.fire({
                title: "Error",
                text: "There was an error sending the message. Please try again.",
                icon: "error",
                customClass: {
                  popup: "swal2",
                },
              });
            }
          )
          .finally(() => {
            setIsSending(false);
          });
      } else {
        setIsSending(false);
      }
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <div className="mb-3">
              <h2 className="text-3xl mb-3">Hello!</h2>
              <p className="max-w-xl">
                If you need to contact me for any reason, whether to ask a
                question or request information, I'll be happy to talk to you!
                You can write me a message here and I'll get back to you as soon
                as possible. Thank you for getting in touch!
              </p>
            </div>
            <div className="flex items-center space-x-4 text-blue-700">
              <ul className="flex gap-4">
                <li>
                  <Link
                    to={"https://www.linkedin.com/in/lucasgabrieltamburlini/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors duration-200 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://lucastamburlini.vercel.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors duration-200 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M20.942 13.02a9 9 0 1 0-9.47 7.964M3.6 9h16.8M3.6 15h9.9" />
                        <path d="M11.5 3a17 17 0 0 0 0 18m1-18c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2l-2-2m-3 0l-2 2l2 2" />
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded p-8 lg:col-span-3 lg:p-12">
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="sr-only">Full Name</label>
                <input
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                  placeholder="Full Name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  <SecondaryButton type={"submit"} text={"send"} />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
