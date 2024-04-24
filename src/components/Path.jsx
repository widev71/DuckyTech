import CardPath from "../micro-components/CardPath";

const Path = () => {
    const paths = [
        {
            'id': 1,
            'title': 'Web Develovment',
            'icon': 'code-slash-outline',
            'desc': 'Create beautiful website with HTML,CSS,React JS,TailWind,and Bootatrap',
            'iconMore': 'chevron-forward-outline',
            'url': '/frontend'
        },
        {
            'id': 2,
            'title': 'Cyber Sec',
            'icon': 'git-compare-outline',
            'desc': 'Create a restfull tools with python langue',
            'iconMore': 'chevron-forward-outline',
            'url': '/backend'
        }
    ]
    return (<>
        <div className="path flex flex-col gap-3 my-9 md:my-14 md:flex-row md:gap-5 lg:px-28 lg:my-0 lg:mb-12" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
            {paths.map((path) => (
                <CardPath
                    key={path.id}
                    title={path.title}
                    icon={path.icon}
                    desc={path.desc}
                    iconMore={path.iconMore}
                    url={path.url}
                />
            ))}
        </div>
    </>);
}

export default Path;