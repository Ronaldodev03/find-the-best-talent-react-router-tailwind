import ReadyStart from "../../components/ReadyStart";
import Clients from "./sections/Clients";
import Directors from "./sections/Directors";
import Hero from "./sections/Hero";

const About = () => {
  return (
    <div>
      <Hero />
      <Directors />
      <Clients />
      <ReadyStart />
    </div>
  );
};

export default About;
