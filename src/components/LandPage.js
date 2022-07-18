import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Menu from "./Menu";
import MapDisplay from "./Map";
import Footer from "./Footer";
import { useState } from "react";

const LandPage = () => {
    const [stat, setStat] = useState(false);
    const changeStat = () => {
    setStat(!stat);

    }
    return(
        <div>
           <Home changeStat={changeStat}/>
           <About />
           <Services />
           <Gallery />
           <Contact />
           <Menu classname={stat? "menuShow": "menuHide"} changeStat={changeStat}/>
           <MapDisplay />
           <Footer />
        </div>
    )
}

export default LandPage;