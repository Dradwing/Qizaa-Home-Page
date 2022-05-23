import React from "react";

function OfferCard(props) {
  return (
    <div className="offerCard">
      <img src={props.data.image} alt="img"></img>
      <p style={{ fontWeight: "bold", fontSize: "x-large" }}>
        {props.data.service}
      </p>
      <p className="hover">{props.data.text}</p>
    </div>
  );
}
export default OfferCard;
