import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import { Cards } from "./Cards";
import PremiumImg from "./PremiumImg";

function Col(props) {
  return (
    <>
      <div className="container" key={props.item.stories_list[0].feid}>
        <div className="col_content">
          <div className="col_content_heading1">
            <div className="col_content_heading">
              <h3 className="col_heading">{props.item.section_name}</h3>
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
              {props.item.stories_list.map((item, index) => {
                // if(index===0) return null;
                return (
                  <SwiperSlide>
                    <div className="editior_premium">
                      <Cards
                        contimgMain="col_content_img"
                        authorslug={item.author_details[0].slug}
                        headingslug={item.industry_details[0].slug}
                        titleslug={item.slug}
                        imgSlug={item.slug}
                        imgclassdiv="col_content_img_main"
                        src={item.file_url}
                        contentcls="col_content_img_content"
                        // titlecls="heading_title"
                        // heading={item.industry_details[0].name}
                        paracls="col_text"
                        title={item.title}
                        publish={item.publish}
                        authorcls="author_para"
                        author={item.author_details[0].name}
                      />
                      {item.premium === "1" ? (
                        <PremiumImg premiumclsname="premiumfounder" />
                      ) : null}
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
