import "./About.css";

const About = () =>{
    return(
        <div className="about" id="about">
            <div className="subAbout">
                <div className="abgym">
                    <h1>about our gym</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet dolor in consectetur cursus. Sed eget tempor tortor. Vivamus molestie ligula ac ligula auctor suscipit. Fusce vulputate metus nibh, non euismod odio egestas et. Fusce auctor eros vel enim ultrices eleifend. Fusce ut velit vitae eros ultrices sagittis vel sed mi. Nam pharetra sollicitudin ligula malesuada fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ante non ullamcorper vehicula. Suspendisse potenti. Nullam gravida lorem ut accumsan semper. Cras tincidunt eros nec rhoncus vehicula. Mauris nulla diam, fermentum vitae magna id, tempus faucibus dolor. Cras eget bibendum turpis. Suspendisse potenti. Mauris ultricies, ligula vitae suscipit eleifend, nulla metus viverra felis, ac consequat mi tortor id odio.</p>
                    <button>become a member</button>
                </div>
                <div className="img">
                    <img src="./assets/fitnessImage/fitnessImg8.jpg" alt="img" />
                </div>
            </div>
        </div>
    )
}

export default About;