// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 3
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const increment = () => (
    set_numLikes(numLikes + 1 )
  )

  const reset = () => (
    set_numLikes(initial_numLikes)
  )
  

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>reset</button>
      </p>
    </div>
  );
}