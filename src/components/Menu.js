import "./Menu.css";
import {FaTimes} from "react-icons/fa"
const Menu = ({classname, changeStat}) => {
    return(
        <div id="sidebar" className={classname}>
            <FaTimes className="times" onClick={changeStat}/>
            <ul>
                <li>home</li>
                <li>services</li>
                <li>about</li>
                <li>gallery</li>
                <li>contact</li>
                <li>login</li>
                <li>signup</li>
            </ul>
        </div>
    )
}

export default Menu;