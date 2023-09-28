import { useState, useEffect } from "react";
import ImageDetail from "./components/ImageDetail"; 

const Earth = (props) => {
   const [isLoading, setIsLoading] = useState(true);
  const [earth, setEarth] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); 

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
      <h1 className="flex justify-center text-6xl mb-4 mt-4 bg-gray-100 font-bold text-blue-500 p-4">EPIC</h1>
      {selectedImage ? (
        <ImageDetail image={selectedImage} />
      ) : (
        <>
          <em>
            <p className="ml-8 mr-8 mt-6 mb-6 text-md text-gray-800 leading-relaxed">
            The EPIC (Earth Polychromatic Imaging Camera) captures mesmerizing images of our planet from NASA's DSCOVR satellite. Positioned a million miles away, it provides a unique vantage point, showcasing Earth's beauty and dynamism. These polygraphic images offer a comprehensive view of our planet, capturing its vibrant hues and ever-changing landscapes. The EPIC Earth imagery stands as a testament to the marvels of modern technology and the boundless wonders of our home planet.
            </p>
          </em>
          {nasaImages()}
        </>
      )}
    </div>
  )
};

export default Earth;
