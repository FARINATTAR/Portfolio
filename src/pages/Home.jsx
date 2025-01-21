
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import EarthCanvas from "../components/canvas/Earth";
import SpaceBackground from '../components/canvas/Space';

const HeroSection = () => {
  return (
    <div>
    <section className="bg-slate-950 text-white h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left">
      
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-2/5 px-2"
      >
        <h1 className="dela-gothic-one-regular text-5xl font-bold mb-3">
          <TypeAnimation
            sequence={['Hi, I\'m Farin Attar', 1000]}
            wrapper="span"
            speed={200}
            style={{ color: '#B78700', display: 'inline-block' }}
            repeat={1}
          />
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl mb-4"
        >
          A passionate Full Stack Web Developer with a knack for Python programming.
        </motion.p>
        <motion.a 
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            See My Work
          </button>
        </motion.a>
      </motion.div>
      
      <div className="w-full md:w-3/5 h-[300px] md:h-[400px] flex justify-center items-center">
        <EarthCanvas />
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
