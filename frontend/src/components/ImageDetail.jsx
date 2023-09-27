
import React from 'react';

const ImageDetail = ({ image }) => {
  return (
    <div>
      <img className="profile-image" src={image[0]} alt="Nasa Pictures" />
      <p>{image[1].caption}</p>
      <p>Date: {image[1].date}</p>
      <p>Coordinates: Lat - {image[1].centroid_coordinates.lat}, Lon - {image[1].centroid_coordinates.lon}</p>
      <p>Quaternions: Q0 - {image[1].attitude_quaternions.q0}, Q1 - {image[1].attitude_quaternions.q1}, Q2 - {image[1].attitude_quaternions.q2}, Q3 - {image[1].attitude_quaternions.q3}</p>
      <p>DSCVR J2000 Position: X - {image[1].dscovr_j2000_position.x}, Y - {image[1].dscovr_j2000_position.y}, Z - {image[1].dscovr_j2000_position.z}</p>
      <p>Lunar J2000 Position: X - {image[1].lunar_j2000_position.x}, Y - {image[1].lunar_j2000_position.y}, Z - {image[1].lunar_j2000_position.z}</p>
      <p>Sun J2000 Position: X - {image[1].sun_j2000_position.x}, Y - {image[1].sun_j2000_position.y}, Z - {image[1].sun_j2000_position.z}</p>
      <p>Attitude Quaternions: Q0 - {image[1].attitude_quaternions.q0}, Q1 - {image[1].attitude_quaternions.q1}, Q2 - {image[1].attitude_quaternions.q2}, Q3 - {image[1].attitude_quaternions.q3}</p>
    </div>
  );
};

export default ImageDetail;

