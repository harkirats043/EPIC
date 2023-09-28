import {useState} from "react";
import {create} from "../utilities/comment-service";

export default function CommentForm({imageId,setAddedComment}){
    const [newForm,setNewForm] = useState({
        comment : " ",
        imageId: imageId
    })

function handleChange(e) {
    setNewForm({...newForm,[e.target.name]: e.target.value})
}

async function handleSubmit(e) {
    e.preventDefault();
    const commentData = await create(newForm);
    console.log(newForm);
    
    setNewForm({
        comment : " ",
        imageId: imageId
    })
setAddedComment(prevState=>!prevState)
}
return (
    <section className="border p-4 text-center">
      <h2 className="text-xl font-bold mb-4 mt-4 ">Add a comment</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto" >
        <input 
          type="text"
          value={newForm.comment}
          name="comment"
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input 
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-4"
        />
      </form>
    </section>
  );
}