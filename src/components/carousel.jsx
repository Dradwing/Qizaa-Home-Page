import React from "react";

function Carousel() {
  return (
    <div className="carousel">
      <div className="main">
        <p
          style={{
            fontSize: "49px",
            fontFamily: "open sans, sans serif",
            fontWeight: "bold",
            letterSpacing: "0.15em",
          }}
        >
          Sustainability In Your Pocket
        </p>
        <p style={{ fontSize: "x-large", fontWeight: "bold" }}>
          Building a future that's exciting!
        </p>
        <button>Explore</button>
      </div>
      <img
        src="https://static.wixstatic.com/media/272cf7_71e7fe458d8a41d08f2c3c2f0857c67e~mv2.png/v1/fill/w_1388,h_695,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/272cf7_71e7fe458d8a41d08f2c3c2f0857c67e~mv2.png"
        alt="img"
      ></img>
      <div className="offer">
        <p
          style={{
            color: "#68B11C",
            fontSize: "50px",
            fontWeight: "550",
            letterSpacing: "0.01em",
            margin: 0,
            marginTop: "250px",
          }}
        >
          WHAT WE OFFER
        </p>
        <p style={{ color: "#68B11C" }}>
          Qizaa is an All In One platform for Sustainable Products, B2B
          Sustainable Services, and Community Programs for a Sustainable
          Lifestyle.
        </p>
      </div>
    </div>
  );
}

export default Carousel;
