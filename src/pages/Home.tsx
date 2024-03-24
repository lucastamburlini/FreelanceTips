import { useNavigate } from "react-router-dom";
import { useData } from "../context/userContext";
import PrimaryButton from "../components/buttons/PrimaryButton";

const Home: React.FC = () => {
  const { userSession } = useData();
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
          {!userSession ? (
            ""
          ) : (
            <h2 className="text-1x1 font-bold sm:text-2xl">
              Hello, {userSession.firstName}! Welcome back.
            </h2>
          )}

          <h1 className="bg-gradient-to-r from-green-300 via-blue-700 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl p-5">
            Tips and Tricks for Freelancers Make Your Work Count!
          </h1>

          <p className="mx-auto mt-2 max-w-xl sm:text-xl/relaxed">
            Discover and share practical tips, tricks, and strategies for
            succeeding as a freelancer in today's competitive job market.
          </p>

          <PrimaryButton text={"Explore the Blog"} onClick={handleToBlog} />
        </div>
      </div>
    </section>
  );
};

export default Home;
