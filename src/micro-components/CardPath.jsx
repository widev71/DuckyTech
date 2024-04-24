const CardPath = ({ title, icon, desc, iconMore, url }) => {
    return (<>
        <div className="group bg-dark-card-hover rounded-sm md:w-1/2 hover:bg-primary lg:p-4 xl:p-6">
            <div className="body p-5">
                {/* icon */}
                <div className="icon text-primary text-5xl md:text-4xl lg:text-6xl font-bold group-hover:text-white">
                    <ion-icon name={icon}></ion-icon>
                </div>
                {/* title */}
                <div className="title text-white font-medium xl:font-semibold tracking-wider text-lg lg:text-2xl font-Kanit">
                    <p>{title}</p>
                </div>
                {/* description */}
                <div className="desc text-white-mute my-5 lg:w-80 group-hover:text-white">
                    <p>{desc}</p>
                </div>
                {/* button */}
                <a href={url} className="button text-dec flex items-center gap-4 w-max py-3 px-5 rounded-sm bg-primary text-white hover:no-underline group-hover:bg-white group-hover:text-primary focus:text-white">
                    <div className="text">
                        Know More
                    </div>
                    <ion-icon name={iconMore}></ion-icon>
                </a>
            </div>
        </div>
    </>);
}

export default CardPath;