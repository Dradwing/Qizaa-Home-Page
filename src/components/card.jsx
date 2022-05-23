import React, { useState } from "react";

function Card(props) {
  const [height, setheight] = useState("0px");
  const [image, setimage] = useState(props.data.image1);

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setheight("40px");
        setimage(props.data.image2);
      }}
      onMouseLeave={() => {
        setheight("0px");
        setimage(props.data.image1);
      }}
    >
      <div className="toggledDiv" style={{ backgroundImage: `url(${image})` }}>
        <div className="toggle" style={{ height: height }}>
          Quick View
        </div>
      </div>
      <p style={{ color: "", marginBottom: 0 }}>{props.data.name}</p>
      <p style={{ marginTop: 0, color: "gray", fontSize: "small" }}>
        <span class="material-symbols-sharp" style={{ fontSize: "1em" }}>
          currency_rupee
        </span>
        {props.data.price}
      </p>
    </div>
  );
}
export default Card;
