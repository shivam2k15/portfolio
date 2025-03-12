import profilePic from "../assets/ShivamProfileImg.png";
import { motion } from "framer-motion";
import { bio } from "../constant";

const containerVarients = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};
const childVarients = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Bio = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/3 lg:pr-8">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Shivam Kumar"
              className="border border-stone-900 rounded-3xl"
              width={700}
              height={700}
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 lg:pl-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVarients}
            className="flex flex-col lg:items-start lg:p-8"
          >
            <motion.h2
              variants={childVarients}
              className="text-4xl pb-2 tracking-tighter lg:text-8xl"
            >
              {bio.name}
            </motion.h2>
            <motion.span
              variants={childVarients}
              className="bg-gradiant-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-light text-left"
            >
              {bio.title}
            </motion.span>
            <motion.p
              variants={childVarients}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {bio.description}
            </motion.p>
            <motion.a
              variants={childVarients}
              href={bio.resumeUrl}
              target="_blank"
              className="w-32 p-4 text-sm bg-white rounded-full text-stone-800 hover:text-stone-500"
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
