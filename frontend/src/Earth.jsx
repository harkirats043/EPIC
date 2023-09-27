import { useState, useEffect } from "react";
import ImageDetail from "./components/ImageDetail"; // Import the new component

const Earth = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [earth, setEarth] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // New state to track selected image

  const BASE_URL = "http://localhost:4000/api/images";

  const getAllImages = async () => {
    try {
      const response = await fetch(BASE_URL, { mode: 'cors' });
      const allImages = await response.json();
      setEarth(allImages);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const nasaImages = () => {
    return earth?.map((pic, index) => {
      return (
        <div key={pic[1].identifier} onClick={() => handleImageClick(pic)}>
          <img className="profile-image" src={pic[0]} alt="Nasa Pictures" />
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
      {selectedImage ? <ImageDetail image={selectedImage} /> : nasaImages()}
    </div>
  )
};

export default Earth;
