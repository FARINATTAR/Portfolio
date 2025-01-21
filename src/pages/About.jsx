import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Card from '../components/Card'; // Adjust the path based on your file structure

function About() {
  const introRef = useRef(null); // Reference for the Introduction section
  const isInView = useInView(introRef, { once: false }); // Animate every time it's in view

  return (
    <div
      className="bg-slate-950 min-h-[85vh] flex flex-col items-center mt-10"
      id="about"
      style={{ scrollMarginTop: '100px' }} // Adjust the offset for scrolling
    >
      <div className="w-full max-w-4xl mx-auto space-y-20 pt-10">
        {/* Introduction Section with Animation */}
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Trigger animation
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth animation
          className="text-center md:text-left"
        >
          <h2 className="text-white text-5xl font-bold mt-5 mb-5">Introduction</h2>
          <p className="text-white mb-5 text-xl">
            Heya! I enjoy turning complex challenges into simple, elegant applications. Let’s build
            something amazing together!
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="flex justify-center flex-wrap gap-5">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              title="Full Stack Developer"
              description="Build and maintain web applications."
              skills="HTML, CSS, JS, React, Express, Node, MongoDB"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              title="Frontend Developer"
              description="Create visually appealing user interfaces."
              skills="HTML, CSS, JS, React, TailwindCSS"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              title="Backend Developer"
              description="Develop server-side logic and APIs."
              skills="Node, Express, MongoDB"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
