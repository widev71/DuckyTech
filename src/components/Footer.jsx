const Footer = () => {
  return (
    <>


    
      <div className="footer bg-dark-decoration text-2xl flex gap-5 justify-center p-3 mt-20">
        <a href="https://github.com/DedukWijaya071" target={"_blank"}>
          <div className="github text-white hover:text-[#6B3BCB]">
            <ion-icon name="logo-github"></ion-icon>
          </div>
        </a>


        <a href="mailto: dedukwijaya@gmail.com">
          <div className="email text-white hover:text-[#6B3BCB]">
            <ion-icon name="mail"></ion-icon>
          </div>
        </a>



        <a
          href="https://www.linkedin.com/in/imade-wijaya-594253280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target={"_blank"}
        >
          <div className="linkedin text-white hover:text-[#6B3BCB]">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </a>
      </div>
    </>
  );
};

export default Footer;
