// ? import components
import NavbarProject from "./NavbarProject";
import CardFeaturedProject from "../micro-components/CardFeaturedProjects";
import BackToTop from "./BackToTop";

// * import image
import foto1 from "../assets/image/python.png"

const BackendProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      thumbnail: foto1,
      name: "Simple Wifi DDoS atack",
      description:
        "Simple program DDoS atack with python",
      tech: [foto1],
      haveDemo: false,
      linkCode: "https://github.com/DedukWijaya071/Duuck",
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
            Backend
          </p>
        </div>

        <div
          className="projects flex flex-col gap-12"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {featuredProjects.map((featuredProject) => (
            <CardFeaturedProject
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

export default BackendProjects;
