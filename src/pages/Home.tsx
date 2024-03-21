import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleToBlog = () => {
    navigate("/blog");
  };

  return (
    <section
      className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center"
      style={{ marginTop: "-70px" }}
    >
      <div className="flex h-screen w-full items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-700 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl p-5">
            Tips and Tricks for Freelancers Make Your Work Count!
          </h1>

          <p className="mx-auto mt-2 max-w-xl sm:text-xl/relaxed">
            Discover and share practical tips, tricks, and strategies for
            succeeding as a freelancer in today's competitive job market.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button
              className="group relative inline-block focus:outline-none focus:ring-0"
              onClick={handleToBlog}
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded bg-green-300  transition-transform group-hover:translate-x-0 group-hover:translate-y-0 "></span>

              <span className="relative inline-block border-2 rounded border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                Explore the Blog
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
