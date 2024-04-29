import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OddProjectCard from "../components/OddProjectCard";
import EvenProjectCard from "../components/EvenProjectCard";

const firstProject : {title:string; description: string; url: string; src: string;iconSrcArray: string[]; iconAltArray: string[]} = {
  title: "Philosofinder AI",
  description : "Philosofinder’s is a FullStack MERN Web App, hosted in AWS. It’s objective is to help find it’s users the philosophies their worldview are already aligned with. Powered by OpenAI’s GPT 4.0.",
  url: "https://philosophy.enzomorales.net",
  src: "/src/assets/pfWindow.png",
  iconSrcArray: ["/src/assets/reactIcon.svg", "/src/assets/nodeIcon.svg", "/src/assets/awsIcon.svg", "/src/assets/mdbIcon.svg"],
  iconAltArray: ["React icon", "Node icon", "AWS icon", "MongoDB icon"],
};

const secondProject : {title:string; description: string; url: string; src: string;iconSrcArray: string[]; iconAltArray: string[]} = {
  title: "React Portfolio",
  description : "This project is a React TypeScript Web App, stylized with Tailwind CSS and hosted in AWS.",
  url: "https://enzomorales.net",
  src: "/src/assets/rpPreview.png",
  iconSrcArray: ["/src/assets/reactIconWhite.svg", "/src/assets/nodeIconWhite.svg", "/src/assets/tsIconWhite.svg", "/src/assets/twIconWhite.svg"],
  iconAltArray: ["React icon", "Node icon", "TypeScript icon", "Tailwind icon"],
}

function Home() {
  return (
    <div className="flex flex-col">
        <Navbar />
        <Hero />
        <OddProjectCard title={firstProject.title} description={firstProject.description} projectUrl={firstProject.url} projectSrc={firstProject.src} iconSrcArray={firstProject.iconSrcArray} iconAltArray={firstProject.iconAltArray} />
        <EvenProjectCard title={secondProject.title} description={secondProject.description} projectUrl={secondProject.url} projectSrc={secondProject.src} iconSrcArray={secondProject.iconSrcArray} iconAltArray={secondProject.iconAltArray} />
        <Footer />

    </div>
  );
}


export default Home;