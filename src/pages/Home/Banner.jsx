import { motion } from "framer-motion";
import team1 from "../../assets/team/team.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-gradient-to-r from-blue-100 via-white to-purple-100 min-h-screen">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm rounded-e-4xl rounded-t-[40px] border-l-8 border-b-8 border-blue-500 rounded-lg shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm rounded-e-4xl rounded-t-[40px] border-s-8 border-b-8 border-blue-500 rounded-lg shadow-2xl"
          />
        </div>
        <motion.div
          className="flex-1"
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <h1 className="text-5xl font-bold">
            Remote{" "}
            <motion.span
              animate={{
                color: ["#adff33", "#33ff47", "#b533ff", "#ffd333", "#adff33"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              Jobs
            </motion.span>{" "}
            for you!
          </h1>
          <p className="py-6 text-base md:text-lg text-gray-600">
            Discover top remote opportunities from anywhere in the world. Whether you're a developer, designer, or marketer — find flexible jobs that fit your lifestyle and let you grow your career without boundaries.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
