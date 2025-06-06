// components
import { Navbar, Footer } from "@/components";
// sections
import Hero from "./hero";
//import Clients from "./clients";
//import Skills from "./skills";
import Projects from "./projects";
//import Resume from "./resume";
//////import Testimonial from "./testimonial";
//import PopularClients from "./popular-clients";
//import ContactForm from "./contact-form";
import TeamProjects from "./team-projects";
import AboutMe from "./aboutMe"
import Experience from "./Experience"

export default function Portfolio() {
  console.log("Projects render"); // 이게 한 번만 찍히면 정상, 여러 번 찍히면 무한 반복 중
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
