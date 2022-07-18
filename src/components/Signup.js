import "./Signup.css"
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
              </form>
          </div>
        </div>

    )
}

export default Signup;