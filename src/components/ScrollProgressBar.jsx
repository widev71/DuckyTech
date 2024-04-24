import { useState } from "react";
import { Container, ProgressBar } from "../micro-components/ProgressBar";

const ScrollProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };

    window.addEventListener("scroll", onScroll);
    return (<>
        <Container>
            <ProgressBar style={{ width: `${scroll}%` }}>
            </ProgressBar>
        </Container>
    </>);
}

export default ScrollProgressBar;