const BackToTop = () => {
  return (
    <>
      <a href="#home" className="lg:px-28">
        <div
          className="group to-top fixed z-50 bottom-3 right-2 bg-white  w-max px-3 py-2 rounded-full md:right-6 md:px-3 md:py-2 lg:md:right-36 xl:right-44 hover:bg-[#482A83]"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="800"
        >
          <div className="icon text-primary group-hover:text-white text-md">
            <ion-icon name="arrow-up-outline"></ion-icon>
          </div>
        </div>
      </a>
    </>
  );
};

export default BackToTop;
