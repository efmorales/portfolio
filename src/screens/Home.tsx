import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";


function Home() {
  return (
    <div className="flex flex-col">
        <Navbar />
        <Hero />
        <ProjectCard />
        <Footer />

    </div>
  );
}


export default Home;