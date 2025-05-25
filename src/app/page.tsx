// components
import { Navbar, Footer } from "@/components";

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

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
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
