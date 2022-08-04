import "./Home.css";
import {GiHamburgerMenu} from "react-icons/gi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

// import {BiDownArrow} from "react-icons/bi"

const Home = ({changeStat}) => {
    return(
        <div className="bground" id="home">
           {/* <div className="container"></div> */}
           <div className="navBar">
               <h1 className="logo">fitness</h1>
               <nav>
                   <ul>
                       <li><AnchorLink offset='100' className='anchorlink' href="#home">home</AnchorLink></li>
                       <li><AnchorLink offset='100' className='anchorlink' href="#services">services</AnchorLink></li>
                       <li><AnchorLink offset='100' className='anchorlink' href="#about">about</AnchorLink></li>
                       <li><AnchorLink offset='100'className='anchorlink' href="#gallery">gallery</AnchorLink></li>
                       <li><AnchorLink offset='100' className='anchorlink' href="#contact">contact</AnchorLink></li>
                       <li><Link to="/signup" className="signup">signup</Link></li>
                       <li><Link to="/login" className="login">login</Link></li>
                   </ul>
                   <button>become a member</button>
                   <GiHamburgerMenu className="menu" onClick={changeStat}/>
               </nav>
            </div>
            <div className="quote">
                <p>start your journey of fitness with us today!!!</p>
                <p>fitness <span className="dot">&bull;</span> Gym <span className="dot">&bull;</span> lifestyle</p>
               {/* <p><span>"</span>going to the gym is great for your body, but it's also good for your mind<span>"</span></p>
               <pre>_________Rory Mcllroy</pre>
    <button>become a member</button> */}
            </div>
        </div>
    )
}

export default Home;