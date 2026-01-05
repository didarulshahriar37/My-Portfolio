import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroWrapper from "@/components/HeroWrapper";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Courses from "@/components/Courses";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Background applies ONLY here */}
      <HeroWrapper>
        <Navbar />
        <Hero />
      </HeroWrapper>

      {/* Other sections — NO background */}
      <section className="min-h-screen">
        <About></About>
        <Skills></Skills>
          <h2 className="text-white text-center font-bold text-2xl md:text-4xl mt-20">Education and Courses</h2>
        <div id="education" className="flex md:flex-row flex-col scroll-mt-55">
          <Education></Education>
          <Courses></Courses>
        </div>
        <Projects></Projects>
        <Contact></Contact>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}