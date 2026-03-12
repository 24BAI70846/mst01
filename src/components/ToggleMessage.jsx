import React, { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show); // flips true/false
  };

  return (
    <div className="toggle-message">
      <button onClick={handleToggle}>
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <p className="message">Welcome to React</p>}
    </div>
  );
}

export default ToggleMessage;