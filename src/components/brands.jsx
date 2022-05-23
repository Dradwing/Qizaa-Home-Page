import React from "react";
import OfferCard from "./offercard";
function Brands() {
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/272cf7_bb28fddf078b47d9a57afc75d5d287ca~mv2.png/v1/fill/w_366,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_bb28fddf078b47d9a57afc75d5d287ca~mv2.png",
      service: "Brown Living",
      text: "Buy sustainable zero-waste products from best brands",
    },
    {
      image:
        "https://static.wixstatic.com/media/272cf7_f6bddb509d9d4f4192062f0f3418ea5d~mv2.png/v1/fill/w_276,h_108,al_c,lg_1,q_85,enc_auto/272cf7_f6bddb509d9d4f4192062f0f3418ea5d~mv2.png",
      service: "Planet Care",
      text: "Buy sustainable zero-waste products from best brands.",
    },
    {
      image:
        "https://static.wixstatic.com/media/272cf7_d8cca9fbf15940d89bca76fffbcc4174~mv2.png/v1/fill/w_147,h_126,al_c,lg_1,q_85,enc_auto/272cf7_d8cca9fbf15940d89bca76fffbcc4174~mv2.png",
      service: "Prakati",
      text: "Buy sustainable zero-waste products from best brands..",
    },
    {
      image:
        "https://static.wixstatic.com/media/272cf7_16c9371c095f401c93d9f9246004f72d~mv2.png/v1/fill/w_291,h_117,al_c,lg_1,q_85,enc_auto/272cf7_16c9371c095f401c93d9f9246004f72d~mv2.png",
      service: "Ecohoy",
      text: "Buy sustainable zero-waste products from best brands.",
    },
    {
      image:
        "https://static.wixstatic.com/media/272cf7_8362aff0740e476ca8eaef385556e09a~mv2.png/v1/fill/w_294,h_71,al_c,lg_1,q_85,enc_auto/272cf7_8362aff0740e476ca8eaef385556e09a~mv2.png",
      service: "Sustainable Indian",
      text: "Buy sustainable zero-waste products from best brands.",
    },
    {
      image:
        "https://static.wixstatic.com/media/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg/v1/fill/w_203,h_90,al_c,lg_1,q_80,enc_auto/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg",
      service: "Earthsy.in",
      text: "Buy sustainable zero-waste products from best brands.",
    },
  ];
  return (
    <div className="brands">
      <p style={{ fontSize: "225%", textAlign: "center", fontWeight: "550" }}>
        Sustainable Brands
      </p>
      <div className="offerCards">
        {data.map((el) => (
          <OfferCard data={el} />
        ))}
      </div>
      <button className="btn">View All</button>
    </div>
  );
}

export default Brands;
