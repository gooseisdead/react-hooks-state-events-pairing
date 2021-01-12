import React, { useState } from 'react'
import video from "../data/video.js";
import Search from "./Search"

function App() {
  console.log("Here's your data:", video);

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  // const [commentNumber, setCommentNumber] = useState(video.comments.length)

  function handleUpVotes () {
    setUpVotes((upVotes) => upVotes + 1)
  }

  function handleDownVotes () {
    setDownVotes((downVotes) => downVotes + 1)
  }

  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <p>{video.views} || Uploaded {video.createdAt}</p>
      <button onClick={handleUpVotes}>👍 {upVotes}</button>
      <button onClick={handleDownVotes}>👎 {downVotes}</button>
      <h2>{video.comments.length} Comments</h2>
      <Search />
    </div>
  );
}

export default App;
