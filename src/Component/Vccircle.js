import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import { Cards } from './Cards';
import PremiumImg from './PremiumImg';

function Vccircle(props) {
  return (
    <div className="vccircle_main" key={props.item.stories_list[0].feid}>
         <div className="container">
        <div className="col_content">
        <div className="col_content_heading1">
                <div className="col_content_heading">
                    <h3 className='col_heading' style={{"color":"#ffffff"}}>{props.item.section_name} <span><img src="./image/crown.png" alt="crown" /></span></h3>
                    <button className="vcccircle_btn">SUBSCRIBE</button>
                </div>
            </div>
            <div className="cardimage_vccircle"> 

            <Swiper
            //  breakpoints={{
            //   320:{
            //     slidesPerView:1,
            //     spaceBetween:20,
            //   },
            //   // 640:{
            //   //   width :640,
            //   //   slidesPerView:2,
            //   //   spaceBetween:20,
            //   // },
            //   768:{
            //     slidesPerView:2,
            //     spaceBetween:20,
            //   }
            // }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
              >
            {props.item.stories_list.map((item) => {
            return (<>
            <SwiperSlide className='swippervcccircle'>
              <div className='vcccircle_sub' style={{"margin-left":"0"}}>
              <div className="editior_premium">
                {/* <div className='vcccircle_img'>
                <img src={item.src} alt="" />
                </div>
                <div className='vcccircle_content'>
                <h3 className="vcccircle_title">{item.title}</h3>
                <p className="vcccircle_para">{item.para}</p>
                <p className="vcccircle_author">{item.author}</p>   
                </div> */}
                <Cards
                // clasName="vcccircle_sub"
                authorslug={item.author_details[0].slug}
                headingslug={item.industry_details[0].slug}
                titleslug={item.slug}
                imgSlug={item.slug}
                imgclassdiv="vcccircle_img"
                src={item.file_url}
                contentcls="vcccircle_content"
                titlecls="vcccircle_title"
                heading={item.industry_details[0].name}
                paracls="vcccircle_para"
                title={item.title}
                publish={item.publish}
                authorcls="vcccircle_author"
                author={item.author_details[0].name}
                />
                 {item.premium==="1"?<PremiumImg premiumclsname="premiumvcccircle"/>:null}
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