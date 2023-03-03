import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import Contact from "../components/ContactUs.jsx";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      {/* <Education /> */}
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Feedbacks />
      <GithubProfileCard />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};
