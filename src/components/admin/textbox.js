import React from "react";
import "../../styles/admin.css";
function Textbox(props) {
  return (
    <div>
      <p className="description-p">{props.textbox}</p>
    </div>
  );
}

export default Textbox;
