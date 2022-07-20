import React from 'react'

function Vcc() {
  return (
    <div className="container">
        <div className="vcc_main">
            <div className="partner_heading">
                <div>
                    <h3 style={{'font-weight':'bold'}}>VCC TV</h3>
                </div>
                <div>
                <p className='viewmore_para'>View more <span><img src="./image/icon-right.png" alt="icon" /></span></p>
                </div>
            </div>
            <div className="vcc_sub">
                <div className='vcc_frame'>
                <iframe width="900" height="506" src="https://www.youtube.com/embed/35npVaFGHMY" title="Welcome to India ! [CINEMATIC TRAVEL FILM]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                    {/* />{" "} */}
                </div>
                <div className='vcc_frame_content'>
                    <h3 className='heading_title'>HEALTHCARE</h3>
                    <h3 className='vcc_content_para'>How can we harness data for healthcare and safegaurd ourselves from cyber threats?</h3>
                    <p className="card-text">The global healthcare data is expected to grow at a CAGR of 36% by 2025. To make healthcare more equitable, affordable and accessible, there is a need to find ways to unite and generate actionable insights from data. How collaborations and strategic partnerships can harness the data to tackle the issues faced by the sector?</p>
                    <p className="author_para">30 September <span>.Madhurima Nandy</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vcc