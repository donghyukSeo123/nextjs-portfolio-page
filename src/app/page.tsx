// components
import { Navbar, Footer } from "@/components";
import { renderWithLineBreaks } from "../components/utils";
// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import TeamProjects from "./team-projects";
import AboutMe from "./aboutMe"
import Experience from "./Experience"

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      {/* <Clients />  */}
      {/* <Skills /> */}
      <Projects />
      <TeamProjects/>
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}
