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

