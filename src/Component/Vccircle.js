import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';

function Vccircle(props) {
  return (
    <div className="vccircle_main">
         <div className="container">
        <div className="col_content">
        <div className="col_content_heading1">
                <div className="col_content_heading">
                    <h3 className='col_heading' style={{"color":"#ffffff"}}>{props.head} <span><img src="./image/crown.png" alt="crown" /></span></h3>
                    <button className="vcccircle_btn">SUBSCRIBE</button>
                </div>
            </div>
            <div className="cardimage_vccircle">

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={4}
              slidesPerView={3}
              navigation
              >
            {props.card.map((item) => {
            return (<>
            <SwiperSlide className='swippervcccircle'>
              <div className='vcccircle_sub' style={{"margin-left":"0"}}>
                <div className='vcccircle_img'>
                <img src={item.src} alt="" />
                <h3 className="vcccircle_title">{item.title}</h3>
                <p className="vcccircle_para">{item.para}</p>
                <p className="vcccircle_author">{item.author}</p>   
                </div>
              </div>
              </SwiperSlide>
              </>
            );
            })}
            </Swiper>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Vccircle