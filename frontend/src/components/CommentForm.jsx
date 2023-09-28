import {useState} from "react";
import {create} from "../utilities/comment-service";

export default function CommentForm({imageId}){
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

}
    return <section>
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-xl font-bold mb-4">Add a comment</h2>
</div>
        <form onSubmit={handleSubmit}>
            <input 
             type="text"
             value={newForm.comment}
             name="comment"
             onChange={handleChange}
             />
             <input type="submit" value=" " />
        </form>
    </section>
}