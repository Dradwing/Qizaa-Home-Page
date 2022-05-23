import React from "react";

function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <img
          src="https://static.wixstatic.com/media/272cf7_76258203c40940639e5df0ab1f940991~mv2.jpg/v1/crop/x_113,y_101,w_878,h_878/fill/w_117,h_117,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2022-100.jpg"
          alt="LOGO"
        ></img>
        <br />
        <img
          src="https://static.wixstatic.com/media/272cf7_455db7932ac74703ab2d706980e02654~mv2.png/v1/crop/x_61,y_0,w_241,h_65/fill/w_141,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_455db7932ac74703ab2d706980e02654~mv2.png"
          alt="LOGO"
          style={{ width: "60%" }}
        ></img>
      </div>
      <div className="menuOptions">
        <p style={{ color: "#68B11C" }}>Home</p>
        <p>Our Store</p>
        <p>Tableware</p>
        <p>Sustainable Packaging</p>
        <p>Buy Wholesome</p>
        <div className="more">
          <p>More</p>
          <div className="moreOptions">
            <p>Lifestyle Products</p>
            <p>Organic Products</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          cursor: "pointer",
        }}
      >
        <span class="material-symbols-outlined" style={{ color: "#68B11C" }}>
          shopping_cart
        </span>{" "}
        <p
          style={{
            backgroundColor: "#68B11C",
            color: "white",
            display: "inline-block",
            padding: "2px 8px",
            borderRadius: "20px",
            textAlign: "center",
            margin: 0,
          }}
        >
          0
        </p>{" "}
        <span class="material-symbols-outlined" style={{ fontSize: "x-large" }}>
          account_circle
        </span>
        <p style={{ margin: 0, display: "inline-block" }}>Join Community</p>
      </div>
    </div>
  );
}

export default Menu;
