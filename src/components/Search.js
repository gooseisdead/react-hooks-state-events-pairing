import React, { useState } from "react"
import video from "../data/video.js";
import Comment from './Comment'

function Search () {
    
    
 const [commentSearch, setCommentSearch] = useState('')

//  console.log(commentSearch)

const filteredComments = video.comments.filter((comment) => {
    return comment.user.toLowerCase().includes(commentSearch.toLowerCase())})

const allComments = filteredComments.map((comment) => {
    return <Comment key={comment.id }user={comment.user} comment={comment.comment}/>
      })

return (
<div>
    <input
    type="text"
    placeholder="Search..."
    onChange={(e) => setCommentSearch(e.target.value)}
  />
    {allComments}
</div>
)
}

export default Search;