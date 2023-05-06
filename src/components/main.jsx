import Header from "./header";
import Hero from "./hero";
import Features from "./features";
import Plan from "./plan";
import Contact from "./contact";
import Cursor from "./cursor";
import "../scss/index.scss";

function Main() {
  return (
    <div className="container">
      <Cursor />
      <Header />
      <Hero />
      <Features />
      <Plan />
      <Contact />
    </div>
  );
}

export default Main;
