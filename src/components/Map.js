import { Map, GoogleApiWrapper } from "google-maps-react";
// import "./Map.css";

const MapDisplay = (props) => {
    return (
        <div className="map">
        <Map google={props.google}
             zoom={10} 
             initialCenter={{
                lat: 29.760427,
                lng: -95.369803
                }}/>
        </div>
    );
      
} 
export default GoogleApiWrapper({
    apiKey: ("AIzaSyD3FQeb4_K4bYBx-R_6W6HbxLhMWRH6Unc")
   })(MapDisplay);
    