import "./Signup.css"
import { Link } from "react-router-dom";
const Signup = () => {
    return(
        <div className="signupForm">
          <div className="formCont">
              <h1 className="logo">fitness</h1>
              <form>
                  <input type="text" placeholder="First Name"/><br/>
                  <input type="text" placeholder="Last Name"/><br/>
                  <input type="email" placeholder="Email or Username"/><br/>
                  <input type="password" placeholder="Password"/><br/>
                  <input type="password" placeholder="Confirm Password"/>
                  <button type="submit">Signup</button>
                  <p style={{color: "white", textAlign: "center", fontFamily: '"Barlow", sans-serif', marginTop: "15px", fontSize: "14px"}}>Already have an account? <Link to="/login" style={{color: "rgb(247, 161, 247)", fontWeight: "500", fontSize: "18px"}}>Login</Link></p>
              </form>
          </div>
        </div>

    )
}

export default Signup;