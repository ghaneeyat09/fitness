import { FaBezierCurve } from "react-icons/fa";
import {FaBiking} from "react-icons/fa";
import {FaHeartbeat} from "react-icons/fa"
import "./Services.css";

const Services = () => {
    return(
        <div className="services" id="services">
            <div className="sub-services">
            <div className="wrapper"></div>
            <div className="ourServices">
            <h1>our services</h1>
            <div className="serve">

                <div>
                    <FaBezierCurve className="icon"/>
                    <p className="title">quality equipments</p>
                    <p className="para">Donec nec accumsan purus. Nulla sed elit sed sapien luctus laoreet eu non nulla. Fusce purus lacus, euismod vel porta in, rhoncus id nisl.</p></div>
                <div>
                    <FaBiking className="icon"/>  
                    <p className="title">body building</p>  
                    <p className="para">Donec nec accumsan purus. Nulla sed elit sed sapien luctus laoreet eu non nulla. Fusce purus lacus, euismod vel porta in, rhoncus id nisl. </p>
                </div>
                <div>
                    <FaHeartbeat className="icon"/>
                    <p className="title">healthy lifestyle</p>
                    <p className="para">Donec nec accumsan purus. Nulla sed elit sed sapien luctus laoreet eu non nulla. Fusce purus lacus, euismod vel porta in, rhoncus id nisl. </p>
                </div>
            </div>
            </div>
            
            </div>
        </div>
    )
}
export default Services;