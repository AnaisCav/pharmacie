import React, { useState } from "react";
import SideEffect from "./SideEffect";

const Medoc = ({ name, descp, image, color, sideEffect }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const addToCart = () => {
    setAddedToCart(true);
  };

  // const sideEffect = ["🥶", "🤮", "😴", "🤕"];

  return (
    <>
      <figure className="cardMedoc">
        <h1 style={{ color: color }}> {name} </h1>
        <p> {descp} </p>
        <img
          className="imgMedoc"
          src={image}
          alt="Une boîte pour te soigner / déglinguer "
        />

        <SideEffect sideEffect={sideEffect} />
        {/* <button onClick={addToCart} className="btn">
          {addedToCart ? "Vous êtes guéri !" : "Ajouter au panier"}
        </button> */}
      </figure>
    </>
  );
};

export default Medoc;
