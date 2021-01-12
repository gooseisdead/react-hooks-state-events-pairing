import React, { useState } from 'react'

function Comment ({user, comment}) {
    // const [user, comment] = comment
    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)
   
    function handleUpVotes () {
        setUpVotes((upVotes) => upVotes + 1)
      }

    function handleDownVotes () {
        setDownVotes((downVotes) => downVotes + 1)
      }

    function deleteComment (e) {
    //    console.log(e.target.parentElement)
       let thisParent = e.target.parentElement
       thisParent.remove()
    }
    
    return (
      
    <div>
        <h3>{user}</h3>
        <p>{comment}</p>
        <button onClick={handleUpVotes}>👍{upVotes}</button>
        <button onClick={handleDownVotes}>👎 {downVotes}</button>
        <button onClick={deleteComment}>Delete</button>
    </div> 
    
    )
}

export default Comment