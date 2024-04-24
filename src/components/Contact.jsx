import emailImage from '../assets/image/email.svg'

const Contact = () => {
    return (<>
        <section id="contact" className='lg:px-28'>
            <div className="contact mt-14 bg-dark-decoration-contact p-5 md:p-9 flex flex-col md:flex-row md:items-center gap-5 rounded-sm" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">

                <div className="asking flex gap-3 flex-col md:w-3/5">
                    <div className="title font-Kanit text-3xl font-semibold text-white">Let’s work together on your next project</div>
                    <div className="desc font-Inter text-white-mute w-9/12">Let's work together and make your plans come true</div>
                </div>

                <div className="button md:w-2/5">
                    <a href="mailto: dedukwijaya@gmail.com" className='hover:no-underline flex justify-center  gap-2 items-center bg-primary px-5 py-3 rounded-sm hover:bg-primary-hover md:w-36 md:float-right' target={'blank'}>
                        <div className="placeholder text-white text-sm font-semibold">
                            Hire Me
                        </div>
                        <div className="icon">
                            <img src={emailImage} alt="eamil-icon" className='h-4' />
                        </div>
                    </a>
                </div>

            </div>
        </section>
    </>);
}

export default Contact;