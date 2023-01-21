import Header from "./header";
import Hero from "./hero";
import Features from "./features";
import Plan from "./plan";
import Contact from "./contact";
import "../scss/index.scss";

function Main() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Features />
      <Plan />
      <Contact />
    </div>
  );
}

export default Main;
