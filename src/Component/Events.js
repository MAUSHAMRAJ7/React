import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';

function Events(props) {
  return (
    <div className="container">
        <div className="col_content">
        <div className="col_content_heading1">
        <div className="col_content_heading">
                    <h3 className='col_heading'>{props.title}</h3>
                    <p className='col_para'>View More <span><img src="./image/icon-right.png" alt="icondown" /></span></p>
                </div>
            </div>
            <div className="cardimage">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={4}
            slidesPerView={3}
            navigation
            >
            {props.card.map((item) => {
            return (<>
            <SwiperSlide>
              <div className='event_sub' style={{"margin-left":"0"}}>
                <div className='event_img'>
                <img src={item.src} alt="" />
                </div>
                <div className="event_content">
                <p className="event_para">{item.para}</p>
                <p className="event_author">{item.author}</p>   
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

  )
}

export default Events