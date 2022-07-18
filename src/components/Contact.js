import { AiOutlineHome } from "react-icons/ai";
import {BsPhone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import "./Contact.css";

const Contact = () => {
    return(
        <div className="contact" id="contact">
            <div className="contact-cont">
                <div className="divone">
                    <form>
                    <h2>get in touch</h2>
                    <textarea placeholder="Enter Message"></textarea>
                    <div className="cont-flex">
                        <input type="text" className="yourname" placeholder="Enter your Name" />
                        <input type="text" className="youremail" placeholder="Email" />
                    </div>
                    <input type="text" placeholder="Enter Subject" className="subject"/><br/>
                    <div class="contBtn">
                      <button>Send</button>
                    </div>
                    </form>
                </div>
                <div className="divTwo">
                    <div className="component">
                        <AiOutlineHome className="con-icon"/>
                        <div>
                            <h1>Houston, Texas</h1>
                            <p>Curlihth, R5 90876</p>
                        </div>
                    </div>
                    <div className="component">
                        <BsPhone className="con-icon"/>
                        <div>
                            <h1>+1234 567 8901</h1>
                            <p>Mon-Sat, 10am-6pm</p>
                        </div>
                    </div>
                    <div className="component">
                        <AiOutlineMail className="con-icon"/>
                        <div>
                            <h1>fitness@outlook.com</h1>
                            <p>Book a session with us today!</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact;