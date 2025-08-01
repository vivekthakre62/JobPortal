import boy from "../images/Boy.png";
import { motion, scale } from "framer-motion";
import Companies from "../component/Companies";
import JobCatagories from "../component/JobCatagories";
function About() {
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};
  const features = [
    {
      title: "✅ Verified Jobs",
      desc: "Only real and verified job listings are posted.",
    },
    {
      title: "🏢 Top Companies",
      desc: "Work with India’s top startups and MNCs.",
    },
    {
      title: "🚀 Fast Application",
      desc: "Apply in one click. No long forms!",
    },
    {
      title: "💼 Resume Builder",
      desc: "Create professional resumes for free.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col hidden-x justify-center px-4 md:px-20 py-10">
      <div className="md:flex items-center justify-between gap-10">
     
        <motion.div
        initial={{opacity: 0, x:-50}}
        animate={{opacity:1 , x:0}}
        transition={{duration:1}}
        className="mb-10 md:mb-0"
        >
          <h1 className="leading-loose font-bold w-auto sm:text-3xl md:text-4xl lg:text-6xl max-w-xl">
            Find Your <span className="text-yellow-400">Dream Job</span> With Us.
          </h1>
          <h3 className="opacity-70 leading-relaxed pt-4 text-md max-w-md">
            Good life begins with a good company. Start your journey to success — all in one place.
          </h3>

          <div className="flex gap-4 mt-6">
            <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition">
              Explore Jobs
            </motion.button>
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }} 
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              Post Resume
            </motion.button>
         </div>
        </motion.div>
         
       <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative flex justify-center items-start"
>
  <motion.div
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute z-10 -left-0 -top-0 w-56 p-6 rounded-xl bg-white/20 backdrop-blur-md border border-yellow-400 text-white shadow-lg"
          style={{ pointerEvents: "none" }} // So div doesn’t block image interaction
        >
          <h3 className="font-bold text-lg mb-2">Welcome!</h3>
          <p className="text-sm opacity-90">
    Start your career journey with confidence.
          </p>
        </motion.div>

  {/* Image */}
  <img
    src={boy}
    alt="boy"
    className="w-[300px] md:w-[450px] lg:w-[600px] mx-auto z-10"
  />
</motion.div>


      </div>

  <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-center"
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            custom={i}
            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-sm opacity-70">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <br/><br/><br/><br/>
      <div>
        <div>
          <h1 className=" font-bold text-center w-auto text-5xl">Trusted by <span className="text-yellow-400" >1000+</span> Companies</h1>
        </div>
             <Companies/><br/><br/><br/><br/>
      <JobCatagories/>
    </div>
    </div>
  );
}

export default About;
