import { useState } from "react";

const NavBar = () => {
  const [firstName, setFirstName] = useState("");
  const handleFirstNameChange = (event) => setFirstName(event.target.value);

  return (
    <div className="navBar">
      <div>
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/5490/5490849.png"
          alt="La pharmacie idéale"
        />
      </div>
      <div className="label">
        <label htmlFor="fullName">
          Name :
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <h1>Welcome to the pharmacy {firstName}</h1>
      </div>
    </div>
  );
};

export default NavBar;
