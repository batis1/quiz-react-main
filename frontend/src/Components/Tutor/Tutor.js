import React from "react";
import Tutor_card from "./Tutor_card.js";
import "./Tutor.css";
import ImgCart from "./imagesTest/profile-picture.jpg";
import { Input } from "antd";
// import { ThumbDown } from "@mui/icons-material";

const Tutor = () => {
  console.log(Tutor_card);
  const listItems = Tutor_card.map((item) => (
    <div className="card-tutor" key={item.id}>
      <div className="card_img">
        <img src={ImgCart} />
      </div>
      <div className="card-tutor_header">
        <h2 className="card-tutor_header-h2">{item.product_name}</h2>
        <p className="card-tutor_header-p">{item.description}</p>
        <p className="price">
          {item.price}
          <span className="card-tutor_header-span">{item.currency}</span>
        </p>
        <div>{/* <ThumbDown /> */}</div>
        <div className="btn-cart-tutor">View Details</div>
      </div>
    </div>
  ));
  return (
    <div className="tutor-container">
      <Input className="form-input" placeholder="search for tutor by name..." />
      <div className="tutor-main_content">
        {/* <h3>Headphones</h3> */}
        {listItems}
        <h1 className="loading-h1" style={{ paddingLeft: "50%" }}>
          loading..
        </h1>
      </div>
    </div>
  );
};
export default Tutor;
