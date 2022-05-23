import React from "react";

function JoinUs() {
  return (
    <div className="joinUs">
      <p
        style={{
          fontFamily: "Caveat , cursive",
          fontSize: "53px",
          fontWeight: "bold",
          color: "#68B11C",
          textAlign: "center",
        }}
      >
        Live A Sustainable Life{" "}
      </p>
      <p
        style={{ fontSize: "x-large", fontWeight: "bold", textAlign: "center" }}
      >
        Join Us Now
      </p>
      <input type="email" placeholder="Add your Email"></input>
      <button className="btn2">Submit</button>
    </div>
  );
}
export default JoinUs;
