import { motion } from "framer-motion";
import { appearIn } from "../motion/motion";

function Hero() {
  return (
    <motion.main
      variants={appearIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="hero"
    >
      <div className="hero_content">
        <h1 className="hero_title">
          Get paid for the work you <span>love</span> to do.
        </h1>
        <p className="hero_info">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="42"
          className="scroll"
        >
          <g fill="none" fill-rule="evenodd" stroke="#3EE9E5" stroke-width="2">
            <rect width="24" height="40" x="1" y="1" rx="12" />
            <motion.rect
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              width="4"
              height="4"
              x="11"
              y="12"
              rx="2"
            />
          </g>
        </svg>
      </div>
    </motion.main>
  );
}

export default Hero;
