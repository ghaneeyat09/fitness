import "./Dashboard.css";
import {FcCalendar} from "react-icons/fc"

const Dashboard = () => {

    const date = new Date();
    console.log(date.toDateString());
    return(
        <div className="dashboard" id="dashboard">
           <nav className="dashboardNav">
               <h1 className="logo">fitness</h1>
               <ul>
                   <li>upgrade now</li>
                   <li><FcCalendar className="cal"/>{date.toDateString()}</li>
               </ul>
           </nav>
           <div className="div1">
               <ul>
                   <li>overview</li>
                   <li>messages</li>
                   <li>groups</li>
                   <li>clients</li>
                   <li>team</li>
                   <li>masters library</li>
                   <li>payments</li>
                   <li>appointments</li>
                   <li>setup guide</li>
               </ul>
           </div>
           <div className="div2">
               <ul>
                   <li>my goals</li>
                   <li>schedule</li>
                   <li>acheivement</li>
                   <li>statistics</li>
                   <li>settings</li>
               </ul>
           </div>
           <div className="svgCont">
               <img src="./assets/fitnessImage/fitnesv.svg" alt="" className="svg"/>
           </div>
        </div>

    )
}

export default Dashboard;