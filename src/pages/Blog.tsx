import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

interface BlogItem {
  id: string;
  author: string;
  date: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

const blogs: BlogItem[] = [
  {
    id: uuidv4(),
    author: "Leslie Alexander",
    date: "2023-01-23T13:23Z",
    title: "Freelancer Tips: How to Organize Your Time Effectively",
    content:
      "Organizing your time effectively is crucial for success as a freelancer. Here are some practical tips to help you achieve it...",
    category: "Organization",
    tags: ["Productivity", "Freelancing", "Remote Work"],
  },
  {
    id: uuidv4(),
    author: "Michael Foster",
    date: "2023-02-15T10:45Z",
    title: "Essential Tools for Freelance Software Developers",
    content:
      "As a freelance software developer, having the right tools can make a difference in your productivity and quality of work...",
    category: "Tools",
    tags: ["Freelancing", "Software Development", "Productivity"],
  },
  {
    id: uuidv4(),
    author: "Dries Vincent",
    date: "2023-03-05T08:30Z",
    title: "Freelance Design: Basic UI/UX Principles",
    content:
      "UI/UX design is crucial for creating exceptional user experiences. Learn the basic principles every freelance designer should master...",
    category: "Design",
    tags: ["Freelancing", "UI", "UX", "Graphic Design"],
  },
  {
    id: uuidv4(),
    author: "Lindsay Walton",
    date: "2023-04-10T15:20Z",
    title: "How to Get Clients as a Freelance Web Developer",
    content:
      "Getting clients is one of the biggest challenges for freelance web developers. Discover effective strategies to attract and retain clients...",
    category: "Clients",
    tags: ["Freelancing", "Web Development", "Clients"],
  },
  {
    id: uuidv4(),
    author: "Courtney Henry",
    date: "2023-05-20T11:10Z",
    title: "Marketing Strategies for Freelance Tech Professionals",
    content:
      "Marketing is key to getting yourself known and getting projects as a freelance tech professional. Learn effective strategies to promote your services...",
    category: "Marketing",
    tags: ["Freelancing", "Technology", "Digital Marketing"],
  },
  {
    id: uuidv4(),
    author: "Tom Cook",
    date: "2023-06-30T09:05Z",
    title: "Tips for Interviews as a Freelance Software Developer",
    content:
      "Preparing for an interview as a freelance software developer can make a difference. Discover practical tips to stand out in your interviews...",
    category: "Interviews",
    tags: ["Freelancing", "Software Development", "Interviews"],
  },
];

const sortedBlogs = [...blogs].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

const Blog: React.FC = () => {
  const handleMoreClick = () => {
    Swal.fire({
      icon: "warning",
      title: "Under construction",
      text: "This functionality is not yet available.",
      customClass: {
        popup: "swal2",
      },
    });
  };

  return (
    <section className="mx-auto py-14 max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-10">
      <div className="flex w-full items-center justify-center">
        <button
          className="group relative inline-block focus:outline-none focus:ring-0"
          onClick={handleMoreClick}
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 rounded bg-green-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

          <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
            Publish post
          </span>
        </button>
      </div>
      <div>
        <ul role="list" className="flex flex-col gap-10">
          {sortedBlogs.map((blog, index) => (
            <li
              key={index}
              className="flex flex-col justify-between p-5 bg-white border border-gray-300 rounded"
            >
              <div className="flex justify-between mb-5 gap-1">
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50 hidden md:block"
                    src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                    alt=""
                  />

                  <div className="min-w-0 flex-auto flex flex-col justify-center ">
                    <p className="font-semibold leading-6 text-gray-900">
                      {blog.title}
                    </p>
                    <p className=" text-sm leading-5 text-gray-500">
                      By {blog.author}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="mt-1 text-xs leading-5 text-gray-500 bg-green-300 px-2 rounded">
                    {blog.category}
                  </p>
                  <div className="text-right">
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Published on{" "}
                      {new Date(blog.date).toLocaleDateString("en-US", {
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
                  {blog.content}
                </p>
                <div className="flex gap-2 text-xs leading-5 text-gray-500">
                  {blog.tags.map((tag, index) => (
                    <span key={index}>#{tag}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          className="group relative inline-block focus:outline-none focus:ring-0"
          onClick={handleMoreClick}
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 rounded bg-green-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

          <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
            See more posts
          </span>
        </button>
      </div>
    </section>
  );
};

export default Blog;
