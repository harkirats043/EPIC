import { useState, useEffect } from "react";

const Earth = (props) => {
   const [isLoading, setIsLoading] = useState(true);
  const [earth, setEarth] = useState([]);

  const BASE_URL = "http://localhost:4000/api/images";
  // this base url variable will be replaced with an environmental variables once we migrate the fetch to service modules
  

  const getAllImages = async () => {
    try {
      const response = await fetch(BASE_URL,{mode:'cors'});
       const allImages = await response.json();
      console.log(allImages)
      setEarth(allImages);
       setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const nasaImages = () => {
    return earth?.map((pic,index) => {
      return (
        <div key={pic[1].identifier}>
          <img className="profile-image" src={pic[0]} alt="Nasa Pictures"/>
          <p>{pic[1].caption}</p>
          <p>Date: {pic[1].date}</p>
        <p>Coordinates: Lat - {pic[1].centroid_coordinates.lat}, Lon - {pic[1].centroid_coordinates.lon}</p>
        <p>Quaternions: Q0 - {pic[1].attitude_quaternions.q0}, Q1 - {pic[1].attitude_quaternions.q1}, Q2 - {pic[1].attitude_quaternions.q2}, Q3 - {pic[1].attitude_quaternions.q3}</p>
        <p>DSCVR J2000 Position: X - {pic[1].dscovr_j2000_position.x}, Y - {pic[1].dscovr_j2000_position.y}, Z - {pic[1].dscovr_j2000_position.z}</p>
        <p>Lunar J2000 Position: X - {pic[1].lunar_j2000_position.x}, Y - {pic[1].lunar_j2000_position.y}, Z - {pic[1].lunar_j2000_position.z}</p>
        <p>Sun J2000 Position: X - {pic[1].sun_j2000_position.x}, Y - {pic[1].sun_j2000_position.y}, Z - {pic[1].sun_j2000_position.z}</p>
        <p>Attitude Quaternions: Q0 - {pic[1].attitude_quaternions.q0}, Q1 - {pic[1].attitude_quaternions.q1}, Q2 - {pic[1].attitude_quaternions.q2}, Q3 - {pic[1].attitude_quaternions.q3}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    getAllImages();
  }, []);


  return ( 
  <div>
    <h1>EPIC Images</h1>
    {nasaImages()}
  </div>
    )
};

export default Earth;

