import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import { appearIn } from "../motion/motion";

function Header() {
  return (
    <motion.header
      variants={appearIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="header"
    >
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
    </motion.header>
  );
}

export default Header;
