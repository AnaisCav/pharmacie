import { useState } from "react";

const SideEffect = ({ sideEffect }) => {
  const [effect, setEffect] = useState("");
  const handleSideEffect = (event) =>
    setEffect("Effets indésirables :" + sideEffect);

  console.log(sideEffect);
  return (
    <>
      <button className="btn" onClick={handleSideEffect}>
        {" "}
        Surprise !{" "}
      </button>
      <p>{effect}</p>
    </>
  );
};
export default SideEffect;
