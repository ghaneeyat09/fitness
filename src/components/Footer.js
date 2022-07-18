import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer">
           <div classname="quicklinks">
               <h1>quick links</h1>
               <ul>
                   <li>home</li>
                   <li>services</li>
                   <li>about</li>
                   <li>gallery</li>
                   <li>contact</li>
                   <li>signUp</li>
                   <li>signIn</li>
               </ul>
           </div>
           <div className="opening hours">
               <h1>opening hours</h1>
               <ul>
                   <li>Monday - 10am:6pm</li>
                   <li>Tuesday - 10am:6pm</li>
                   <li>Wednesday- 10am:6pm</li>
                   <li>Thursday - 10am:6pm</li>
                   <li>Friday - 10am:6pm</li>
                   <li>Saturday - 10am:6pm</li>
                   <li>Sunday - Day-off</li>
               </ul>
           </div>
        </div>
    )
}

export default Footer;