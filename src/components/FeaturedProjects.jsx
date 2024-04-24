// import image
import jsLogo from "../assets/image/js.png";
import htmlLogo from "../assets/image/html.png";
import website01 from "../assets/image/wijaya01.png"
import foto1 from "../assets/image/fortofolio01.png"
import foto2 from "../assets/image/wijaya02.png"
import Logo21 from "../assets/image/react.png"
import Logo24 from "../assets/image/css-3.png"
import taiwind from "../assets/image/tailwind.png"
import pythonLogo from "../assets/image/python.png"


// import component
import CardFeaturedProject from "../micro-components/CardFeaturedProjects";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      thumbnail: foto1,
      name: "Fortofolion Pribadi",
      description: "Make simple website with javascript,React, and Tailwind language",
      tech: [jsLogo, htmlLogo, Logo21,Logo24, taiwind],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 2,
      thumbnail: website01,
      name: "Wizard animation Website",
      description:
        "Create a website simple animation with a HTML,CSS,JavaScrip",
      tech: [Logo24, htmlLogo, jsLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/Animation",
      linkDemo: "https://dedukwijaya071.github.io/Animation/",
    },
    {
      id: 3,
      thumbnail: foto2,
      name: "Wifi DDoS atack",
      description: "Simple program DDoS atack with python",
      tech: [pythonLogo],
      haveDemo: false,
      linkCode: "https://github.com/DedukWijaya071/Duuck",
    },
  ];

  return (
    <>
      <section id="projects">
        {/* ... (bagian lain dari komponen) */}
        <div className="projects flex flex-col gap-12">
          {featuredProjects.map((featuredProject) => (
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
      </section>
    </>
  );
};

export default FeaturedProjects;
