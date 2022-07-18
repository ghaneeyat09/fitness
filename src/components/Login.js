import "./Login.css";
import {Link} from "react-router-dom"

const Login = () => {
    return(
        <div className="loginForm">
         <div className="loginCont">
              <h1>fitness</h1>
              <form>
                  <input type="email" placeholder="Email or Username"/><br/>
                  <input type="password" placeholder="Password"/><br/>
                  <button type="submit">Login</button>
                  <p style={{color: "white", textAlign: "center", fontFamily: '"Barlow", sans-serif', marginTop: "10px", fontSize: "14px"}}>Don't have an account yet? <Link to="/signup" style={{color: "red", fontWeight: "600", fontSize: "18px"}}>Signup</Link></p>
              </form>
          </div>
        </div>

    )
}

export default Login;