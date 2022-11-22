import React from "react";
import "./Product.css";
import mainImg from "./assets/image-product-1.jpg";
import Img2 from "./assets/image-product-2.jpg";
import Img3 from "./assets/image-product-3.jpg";
import Img4 from "./assets/image-product-4.jpg";
import plus from "./assets/icon-plus.svg";
import minus from "./assets/icon-minus.svg";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Product = () => {
  return (
    <div className="container">
      <div className="product">
        {/* <img src={mainImg} alt="no" className="mainImg sm" /> */}
        <div className="product_images">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img src={mainImg} alt="no" className="mainImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img2} alt="no" className="mainImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img4} alt="no" className="mainImg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img3} alt="no" className="mainImg" />
            </SwiperSlide>
          </Swiper>
          <div className="thumbs">
            <img src={mainImg} alt="no" className="thumbnail" />
            <img src={Img2} alt="no" className="thumbnail" />
            <img src={Img3} alt="no" className="thumbnail" />
            <img src={Img4} alt="no" className="thumbnail" />
          </div>
        </div>

        <div className="product_details">
          <h5>SNEAKER COMPANY</h5>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These Low Profile Sneaker Are perfect casual wear companion,
            Featuring a durable outersole they will withstand the whatever
            wheater has to offer
          </p>
          <div className="price_container">
            <div className="price">
              <h1>$125.00</h1>
              <h3>50%</h3>
            </div>
            <h4>$250.00</h4>
          </div>
          <div className="btn_counter">
            <div className="counter">
              <button>
                <img src={minus} alt="" />
              </button>
              <input value={0} readOnly></input>
              <button>
                <img src={plus} alt="" style={{ marginTop: "5px" }} />
              </button>
            </div>
            <button className="adtocart">Add To cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
