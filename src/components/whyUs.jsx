import React from "react";

function WhyUs() {
  return (
    <div className="whyUs">
      <div className="whyUs1">
        <div className="whyUs11">
          <p style={{ fontSize: "225%", marginTop: 0 }}>Why Choose Us! </p>
          <p>Qizaa- Sustainability In Your Pocket...</p>
          <div className="overlay"></div>
        </div>

        <p style={{ fontSize: "90%" }}>
          At our core, we truly believe in making the world a more sustainable
          and better place to live in.{" "}
        </p>
      </div>
      <div className="whyUs2">
        <div className="whyUs22">
          <span class="material-symbols-outlined">recycling</span>
          <p>Best Sustainable Products</p>
        </div>

        <div className="whyUs22">
          <span class="material-symbols-outlined">eco</span>
          <p>Way to Sustainable Life</p>
        </div>
        <div className="whyUs22">
          <span class="material-symbols-outlined">public</span>
          <p>Environmental Priority</p>
        </div>
        <div className="whyUs22">
          <span class="material-symbols-outlined">group</span>
          <p>Community Focused</p>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
