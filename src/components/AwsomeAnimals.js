// src/components/AwesomeAnimals.js

export default function AwesomeAnimals() {

  return (
   <ul className="card shadow-sm mb-4 m-3 p-2">
      <div className="card-body pb-4 ">
     {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
      (animal, index) => {
        return <li key={index}>
          Awesomeness level{index + 1}: {animal}</li>;
    }
   )}
   </div> 
   </ul>
  );
}