import CommentForm from '../components/CommentForm';
import React from 'react';

const ImageDetail = ({ image }) => {
  console.log(image)
  return (
    <div className=''>
    <img className="profile-image" src={image[0]} alt="Nasa Pictures" />
    <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
            <tbody className="bg-gray-100">
                <tr>
                    <td className="p-2">Caption</td>
                    <td className="p-2">{image[1].caption}</td>
                </tr>
                <tr>
                    <td className="p-2">Date</td>
                    <td className="p-2">{image[1].date}</td>
                </tr>
                <tr>
                    <td className="p-2">Coordinates</td>
                    <td className="p-2">Lat - {image[1].centroid_coordinates.lat}, Lon - {image[1].centroid_coordinates.lon}</td>
                </tr>
                <tr>
                    <td className="p-2">Quaternions</td>
                    <td className="p-2">
                        Q0 - {image[1].attitude_quaternions.q0}, 
                        Q1 - {image[1].attitude_quaternions.q1}, 
                        Q2 - {image[1].attitude_quaternions.q2}, 
                        Q3 - {image[1].attitude_quaternions.q3}
                    </td>
                </tr>
                <tr>
                    <td className="p-2">DSCVR J2000 Position</td>
                    <td className="p-2">
                        X - {image[1].dscovr_j2000_position.x}, 
                        Y - {image[1].dscovr_j2000_position.y}, 
                        Z - {image[1].dscovr_j2000_position.z}
                    </td>
                </tr>
                <tr>
                    <td className="p-2">Lunar J2000 Position</td>
                    <td className="p-2">
                        X - {image[1].lunar_j2000_position.x}, 
                        Y - {image[1].lunar_j2000_position.y}, 
                        Z - {image[1].lunar_j2000_position.z}
                    </td>
                </tr>
                <tr>
                    <td className="p-2">Sun J2000 Position</td>
                    <td className="p-2">
                        X - {image[1].sun_j2000_position.x}, 
                        Y - {image[1].sun_j2000_position.y}, 
                        Z - {image[1].sun_j2000_position.z}
                    </td>
                </tr>
                <tr>
                    <td className="p-2">Attitude Quaternions</td>
                    <td className="p-2">
                        Q0 - {image[1].attitude_quaternions.q0}, 
                        Q1 - {image[1].attitude_quaternions.q1}, 
                        Q2 - {image[1].attitude_quaternions.q2}, 
                        Q3 - {image[1].attitude_quaternions.q3}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <CommentForm imageId={image[1].identifier}/>
</div>

  );
};

export default ImageDetail;

