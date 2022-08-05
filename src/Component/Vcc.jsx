import React from 'react'
import moment from 'moment'

function Vcc(props) {
  return (
    <div className="container" key={props.item.stories_list.feid}>
        <div className="vcc_main">
            <div className="partner_heading">
                <div>
                    <h3 style={{'font-weight':'bold'}}>{props.item.section_name}</h3>
                </div>
                <div>
                <p className='viewmore_para'>View more <span><img src="./image/icon-right.png" alt="icon" /></span></p>
                </div>
            </div>
            <div className="vcc_sub">
                <div className='vcc_frame'>
                {/* <img className="imgsize" src={props.item.stories_list[0].file_url} alt="" /> */}
                <iframe className='vcc_frame_iframe' width="900" height="506" src="https://www.youtube.com/embed/35npVaFGHMY" title="Welcome to India ! [CINEMATIC TRAVEL FILM]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                        
                </div>
                <div className='vcc_frame_content'>
                    <h3 className='heading_title'>{props.item.stories_list[0].industry_details[0].name}</h3>
                    <h3 className='vcc_content_para'>{props.item.stories_list[0].title}</h3>
                    <p className="card-texttv">{props.item.stories_list[0].summary}</p>
                    <p className="author_para">{moment(props.publish).format("Do MMM YYYY")}<span>.{props.item.stories_list[0].author_details[0].name}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vcc