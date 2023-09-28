import CommentForm from '../components/CommentForm';
import { getAllComments } from '../utilities/comment-service';
import React, { useEffect, useState } from 'react';


const ImageDetail = ({ image }) => {
  const [comments, setComments] = useState([]);
const [addedComment,setAddedComment] = useState(false)

  const handleRequest = async () => {
    try {
      const commentData = await getAllComments(image[1].identifier);
      setComments(commentData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(`Comments: ${JSON.stringify(comments)}`);

  const userComments=comments?.map(comment=>(
  <div key={comment._id}>{comment.comment}</div>
  )
  )

  useEffect(() => {
    handleRequest();
  }, [addedComment]);

  return (
    <div className=''>
    <img className="profile-image" src={image[0]} alt="Nasa Pictures" />
    <div className="overflow-x-auto">
        <table className="min-w-full border-2 border-solid border-indigo-500 mt-4 ">
            <tbody className="bg-gray-100">
                <tr>
                <td className="p-2 border border-indigo-400 bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l ">Caption</td>
                    <td className="p-2 border border-indigo-400 text-sm">{image[1].caption}</td>
                </tr>
                <tr>
                    <td className="p-2 border border-indigo-400  bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l">Date</td>
                    <td className="p-2 border border-indigo-400 text-sm">{image[1].date}</td>
                </tr>
                <tr>
                    <td className="p-2 border border-indigo-400  bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l">Coordinates</td>
                    <td className="p-2 border border-indigo-400 text-sm">Lat - {image[1].centroid_coordinates.lat}, Lon - {image[1].centroid_coordinates.lon}</td>
                </tr>
                <tr>
                    <td className="p-2 border border-indigo-400  bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l">Quaternions</td>
                    <td className="p-2 border border-indigo-400 text-sm">
                        Q0 - {image[1].attitude_quaternions.q0}, 
                        Q1 - {image[1].attitude_quaternions.q1}, 
                        Q2 - {image[1].attitude_quaternions.q2}, 
                        Q3 - {image[1].attitude_quaternions.q3}
                    </td>
                </tr>
                <tr>
                    <td className="p-2 border border-indigo-400  bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l">DSCVR J2000 Position</td>
                    <td className="p-2 border border-indigo-400 text-sm">
                        X - {image[1].dscovr_j2000_position.x}, 
                        Y - {image[1].dscovr_j2000_position.y}, 
                        Z - {image[1].dscovr_j2000_position.z}
                    </td>
                </tr>
                <tr>
                    <td className="p-2 border border-indigo-400  bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l">Lunar J2000 Position</td>
                    <td className="p-2 border border-indigo-400 text-sm">
                        X - {image[1].lunar_j2000_position.x}, 
                        Y - {image[1].lunar_j2000_position.y}, 
                        Z - {image[1].lunar_j2000_position.z}
                    </td>
                </tr>
                <tr>
                    <td className="p-2 border border-indigo-400  bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l">Sun J2000 Position</td>
                    <td className="p-2 border border-indigo-400 text-sm">
                        X - {image[1].sun_j2000_position.x}, 
                        Y - {image[1].sun_j2000_position.y}, 
                        Z - {image[1].sun_j2000_position.z}
                    </td>
                </tr>
                <tr>
                    <td className="p-2 border border-indigo-400  bg-indigo-100 text-black hover:bg-indigo-200 transition duration-300 italic text-l">Attitude Quaternions</td>
                    <td className="p-2 border border-indigo-400 text-sm">
                        Q0 - {image[1].attitude_quaternions.q0}, 
                        Q1 - {image[1].attitude_quaternions.q1}, 
                        Q2 - {image[1].attitude_quaternions.q2}, 
                        Q3 - {image[1].attitude_quaternions.q3}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <CommentForm imageId={image[1].identifier} setAddedComment={setAddedComment} />
   {userComments}
</div>

  );
};

export default ImageDetail;

