import { motion } from "framer-motion";
import team1 from "../../assets/team/team.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-gradient-to-r from-blue-100 via-white to-purple-100 min-h-screen px-4 md:px-12 lg:px-24 py-10">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-4 md:gap-20">
        
        {/* Images container */}
       <div className="md:block hidden">
         <div className="flex flex-col gap-5 flex-shrink-0">
          <motion.img
            src={team1}
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-xs md:max-w-sm rounded-e-4xl rounded-t-[40px] border-l-8 border-b-8 border-blue-500 rounded-lg shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [80, 50, 80] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-xs md:max-w-sm rounded-e-4xl rounded-t-[40px] border-s-8 border-b-8 border-blue-500 rounded-lg shadow-2xl"
          />
        </div>
       </div>

        {/* Text container */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-xl"
          animate={{ x: 20 }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
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
