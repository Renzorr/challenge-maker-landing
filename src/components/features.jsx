import passion from "../assets/illustration-passions.svg";
import finance from "../assets/illustration-financial-freedom.svg";
import lifestyle from "../assets/illustration-lifestyle.svg";
import work from "../assets/illustration-work-anywhere.svg";
import { motion } from "framer-motion";

const animateFeatures = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

function Features() {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 1 }}
      variants={animateFeatures}
      className="features"
    >
      <div className="features_card">
        <picture>
          <img
            src={passion}
            alt=""
            aria-hidden="true"
            className="features_picture passion"
          />
        </picture>
        <div className="features_content">
          <span>Indulge your passions</span>
          <p>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </p>
        </div>
      </div>

      <div className="features_card bottom">
        <picture>
          <img
            src={finance}
            alt=""
            aria-hidden="true"
            className="features_picture finance"
          />
        </picture>
        <div className="features_content">
          <span>Gain financial freedom</span>
          <p>
            Start making money work for you. There’s nothing quite like earning
            while you sleep.
          </p>
        </div>
      </div>

      <div className="features_card">
        <picture>
          <img
            src={lifestyle}
            alt=""
            aria-hidden="true"
            className="features_picture lifestyle"
          />
        </picture>
        <div className="features_content">
          <span>Choose your lifestyle</span>
          <p>
            Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
            your week.
          </p>
        </div>
      </div>

      <div className="features_card bottom">
        <picture>
          <img
            src={work}
            alt=""
            aria-hidden="true"
            className="features_picture work"
          />
        </picture>
        <div className="features_content">
          <span>Work from anywhere</span>
          <p>
            Selling online means not being pinned down. Want to work AND travel?
            Go for it!
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Features;
