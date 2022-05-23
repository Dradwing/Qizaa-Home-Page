import React from "react";
import OfferCard from "./offercard";

function Offer() {
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/272cf7_85bd2da00ccf4d9a86f2eda94b19111a~mv2.png/v1/fill/w_114,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sustainability.png",
      service: " Sustainable Products",
      text: " Buy sustainable zero-waste products from best brands.",
    },
    {
      image:
        "https://static.wixstatic.com/media/272cf7_40028ca4a08346769adf960399e7b010~mv2.png/v1/fill/w_134,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_40028ca4a08346769adf960399e7b010~mv2.png",
      service: "B2B Services",
      text: "Introducing sustainable culture in corporate environment.",
    },
    {
      image:
        "https://static.wixstatic.com/media/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png/v1/fill/w_114,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png",
      service: "Our Community",
      text: " Introducing sustainable culture in all communities.",
    },
  ];
  return (
    <div className="offerCards">
      {data.map((el) => (
        <OfferCard data={el} />
      ))}
    </div>
  );
}
export default Offer;
