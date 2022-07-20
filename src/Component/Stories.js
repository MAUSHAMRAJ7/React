import React from 'react'
import Advertisment from './Advertisment'

function Stories() {

    const storiesdata=[
        {
            src:"../image/stories1.png",
            title:"FINANCE",
            para:"DSG Consumer Partners likely to raise nearly $125 mn for new fund",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories2.png",
            title:"CONSUMER",
            para:"RPSG Capital Ventures to raise Rs 500 cr for consumer-focused fund",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories3.png",
            title:"PEOPLE",
            para:"Jobs portal Apna appoints former PayU’s Shantanu Preetam as its first CTO",
            author:"30 September  .Madhurima Nandy"
        }
    ]
    const storiesdata1=[
        {
            src:"../image/stories4.png",
            title:"ECONOMY",
            para:"GLOBAL MARKETS - Asia shares fall as Treasury yields hit fresh highs",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories5.png",
            title:"TMT",
            para:"Kotak’s asset arm, others lead $6 mn bet on cancer detection platform Epigeneres",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories6.png",
            title:"FINANCE",
            para:"Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr",
            author:"30 September  .Madhurima Nandy"
        }
    ]
    const storiesdata2=[
        {
            src:"../image/stories7.png",
            title:"CONSUMER",
            para:"Actor Tiger Shroff, BharatPe’s Ashneer Grover, others back Freadom",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories8.png",
            title:"ECONOMY",
            para:"Indian shares slip after five-day rally; HCL top drag ahead of results",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories9.png",
            title:"CONSUMER",
            para:"Dogsee Chew raises Rs 50 cr in Series A from Mankind Pharma; Sixth Sense Ventures",
            author:"30 September  .Madhurima Nandy"
        }
    ]
    const storiesdata3=[
        {
            src:"../image/stories10.png",
            title:"INFRASTRUCTURE",
            para:"Shadowfax’s pivot pays off as focus sharpens on last mile delivery",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories11.png",
            title:"HEALTHCARE",
            para:"Health Care At Home India secures $15 mn from new PE investor ABC World Asia",
            author:"30 September  .Madhurima Nandy"
        },
        {
            src:"../image/stories12.png",
            title:"FINANCE",
            para:"Walton Street BlackSoil Real Estate Debt Fund II invests in two housing projects",
            author:"30 September  .Madhurima Nandy"
        }
    ]
  return (
<div>
    <div className='container'>
        <div className="stories_main">
        <h3 className="editor_head">More Stories</h3>
        <div className="">
            <div className="storiesflex">
            <div className="cardimage1">
             {storiesdata.map((item) => {
        return (
          <div className="card_content1">
            <div className="stories_cardimage" >
            <img src={item.src} alt="cardone_image"  />
            </div>
            <div className="stories_card_text">
            <h3  className="morestories_title">{item.title}</h3>
            <p className="morestories_title_para">{item.para}</p>
            <p className="morestories_author_para">{item.author}</p>
            </div>
          </div>
        );
      })}
    </div>
    
    <div className="cardimage1">
      {storiesdata1.map((item) => {
        return (
          <div className="card_content1">
            <div className="stories_cardimage">
            <img src={item.src} alt="cardone_image"  />
            </div>
            <div className="stories_card_text">
            <h3  className="morestories_title">{item.title}</h3>
            <p className="morestories_title_para">{item.para}</p>
            <p className="morestories_author_para">{item.author}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>

    </div>
        </div>
    </div>

      <Advertisment img='./image/ad2.png'/>

    <div className='container'>
      <div className="storiesflex1">
     <div className="cardimage1">
      {storiesdata2.map((item) => {
        return (
          <div className="card_content1">
            <div className="stories_cardimage">
            <img src={item.src} alt="cardone_image"  />
            </div>
            <div className="stories_card_text">
            <h3  className="morestories_title">{item.title}</h3>
            <p className="morestories_title_para">{item.para}</p>
            <p className="morestories_author_para">{item.author}</p>
            </div>
          </div>
        );
      })}
    </div>
    
    <div className="cardimage1">
      {storiesdata3.map((item) => {
        return (
          <div className="card_content1">
            <div className="stories_cardimage">
            <img src={item.src} alt="cardone_image"  />
            </div>
            <div className="stories_card_text">
            <h3  className="morestories_title">{item.title}</h3>
            <p className="morestories_title_para">{item.para}</p>
            <p className="morestories_author_para">{item.author}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Stories;