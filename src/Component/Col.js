import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";

function Col(props) {
  return (
    <>
      <div className="container">
        <div className="col_content">
          <div className="col_content_heading1">
            <div className="col_content_heading">
              <h3 className="col_heading">{props.title}
              <span className="mergerdesktop">
                {props.title2}
              </span>
              <span className="mergerresponse">
                {props.title3}
              </span>
              </h3>
              <p className="col_para">
                View More{" "}
                <span>
                  <img src="./image/icon-right.png" alt="icondown" />
                </span>
              </p>
            </div>
          </div>
          <div className="col_cardimage">
            {/* <div className="cardimage"> */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
            >
              {props.card.map((item) => {
                return (
                  <SwiperSlide>
                    <div
                      className="col_content_img"
                      style={{ "margin-left": "0" }}
                    >
                      <div className="col_content_img_main">
                      <img src={item.src} alt="" />
                      </div>
                      <div className="col_content_img_content">
                      <p className="col_text">{item.para}</p>
                      <p className="col_author">{item.author}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              ;
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Col;
