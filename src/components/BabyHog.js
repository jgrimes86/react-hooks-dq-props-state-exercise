import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
const eyeColorArray = [
  {
    color: "blue",
    image: BlueBaby
  },
  {
    color: "sun",
    image: SunBaby
  },
  {
    color: "glowing",
    image: GlowingBaby
  },
  {
    color: "",
    image: normalBaby
  }
]

function BabyHog(props) {
  const { name, hobby, eyeColor } = props;
  
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(200);
  
  function handleOnClick(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if (e.target.name === "+") {
      setWeight((weight) => weight+5)
      setHeight((height) => height+10)
    } else if (e.target.name === "-") {
      setWeight((weight) => weight-5)
      setHeight((height) => height-10)
    }
  }

  // const eyeColorChanger = () => {
  //   if (eyeColor === "blue") {
  //     return BlueBaby
  //   } else if (eyeColor === "sun") {
  //     return SunBaby
  //   } else if (eyeColor === "glowing") {
  //     return GlowingBaby
  //   } else {
  //     return normalBaby
  //   }
  // }

  const eyeColorObject = eyeColorArray.find((object) => {
    if (object.color === eyeColor) {
      return true
    }
  })

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight} lbs</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleOnClick}>Increase Weight</button>
      <button name="-" onClick={handleOnClick}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorObject.image}
          style={{ height: `${height}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
