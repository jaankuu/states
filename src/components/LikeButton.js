// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState

export default function LikeButton() {
  const [Liked, set_Liked] = useState(false); // <- using state!
  console.log("likebutton status:", Liked)

  const clickLiked = () => (
    set_Liked(!Liked)
  )

  return (
    <div className = "card shadow-sm m-3 p-2">
      <p>
        <button className="btn btn-light" onClick={clickLiked}>
        {Liked ? "You liked this" : "Like"}    
        </button>
      </p>
    </div>
  );
}