import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";

import passion from "../assets/illustration-passions.svg";
import finance from "../assets/illustration-financial-freedom.svg";
import lifestyle from "../assets/illustration-lifestyle.svg";
import work from "../assets/illustration-work-anywhere.svg";

function Features() {
  return (
    <motion.section
      variants={fadeIn("right", "spring", 0, 1.5)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
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
        <article className="features_content">
          <span>Indulge your passions</span>
          <p>
            Your passions shouldn't be just for the weekend. Earn a living doing
            what you love.
          </p>
        </article>
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
        <article className="features_content">
          <span>Gain financial freedom</span>
          <p>
            Start making money work for you. There’s nothing quite like earning
            while you sleep.
          </p>
        </article>
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
        <article className="features_content">
          <span>Choose your lifestyle</span>
          <p>
            Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
            your week.
          </p>
        </article>
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
        <article className="features_content">
          <span>Work from anywhere</span>
          <p>
            Selling online means not being pinned down. Want to work AND travel?
            Go for it!
          </p>
        </article>
      </div>
    </motion.section>
  );
}

export default Features;
