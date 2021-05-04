// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState

export default function LikeButton() {
  const [Liked, set_Liked] = useState(false); // <- using state!
  console.log(Liked)

  const clickLiked = () => (
    set_Liked(!Liked)
  )


  return (
    <div>
      <p>
        <button onClick={clickLiked}>
        {Liked ? "You liked this" : "Like"}    
        </button>
      </p>
    </div>
  );
}