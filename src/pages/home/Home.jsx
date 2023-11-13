import ReadyStart from "../../components/ReadyStart";
import Build from "./sections/Build";
import DeliveringResults from "./sections/DeliveringResults";
import Hero from "./sections/Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      <Build />
      <DeliveringResults />
      <ReadyStart />
    </div>
  );
};

export default Home;
