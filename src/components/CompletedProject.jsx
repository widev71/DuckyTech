import BackToTop from "./BackToTop";
import NavbarProject from "./NavbarProject";
import jsLogo from "../assets/image/js.png";
import htmlLogo from "../assets/image/html.png";
import tailwindLogo from "../assets/image/tailwind.png";
import reactLogo from "../assets/image/react.png";
import foto from "../assets/image/fortofolio01.png"
import foto2 from "../assets/image/wijaya01.png"

import CardFeaturedProject from "../micro-components/CardFeaturedProjects";

const CompletedProject = () => {
  const completedProjects = [
    {
      id: 1,
      thumbnail: foto,
      name: "Fortofolio Pribadi",
      description: 
        "Make simple website with javascript,React, and Tailwind language",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 2,
      thumbnail: foto2,
      name: "Wizard animation Website",
      description:
        "Create a website simple animation with a HTML,CSS,JavaScrip",
      tech: [jsLogo, tailwindLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/Animation",
      linkDemo: "https://dedukwijaya071.github.io/Animation/",
    },
  ];
  return (
    <>
      <NavbarProject />
      <BackToTop />

      <div className="main my-5 lg:px-28 flex flex-col gap-5 lg:gap-12">
        <div
          className="title"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <p className="text-white font-semibold font-Kanit text-4xl tracking-wide lg:tracking-wider xl:text-4xl">
            Completed Project
          </p>
        </div>

        <div
          className="projects flex flex-col gap-12"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {completedProjects.map((featuredProject) => (
            <CardFeaturedProject
              key={featuredProject.id}
              id={featuredProject.id}
              thumbnail={featuredProject.thumbnail}
              name={featuredProject.name}
              description={featuredProject.description}
              tech={featuredProject.tech}
              haveDemo={featuredProject.haveDemo}
              linkCode={featuredProject.linkCode}
              linkDemo={featuredProject.linkDemo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CompletedProject;
