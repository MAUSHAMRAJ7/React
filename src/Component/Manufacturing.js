import React from "react";
import Advertisment from "./Advertisment";
import { Cards } from "./Cards";

function Manufacturing(props) {
  return (
    <div className="container">
      <div className="manufacturing_main">
        <div className="manufacturing_left">
          <h1 className="menu_title">{props.item.stories_list[0].industry_details[0].name}</h1>
          <h3 className="manu_subcontent">
            {/* Warburg Pincus set to acquire majority stake in auto parts maker */}
            {props.item.stories_list[0].title }
          </h3>
          <p className="manu_left_para">
            {/* Private equity firm TPG, which is reportedly heading towards a
            public listing, said on Thursday it had appointed long-time company
            executive Todd Sisitsky as president, effective immediately. */}
            {props.item.stories_list[0].summary}
          </p>

          <p className="manu_author_para">
            {props.item.stories_list[0].publish}<span>.{props.item.stories_list[0].author_details[0].name}</span>
          </p>

          <button className="manufacturing_button">READ MORE</button>
        </div>
        
        <div className="manufacturing_right">
        <img src={props.item.stories_list[0].file_url} />
        </div>
      </div>



      <div className="economy_main" key={props.item.stories_list.feid}>
          
                {props.item.stories_list.map((item,index) =>{
                  if(index===0) return null;
                  return(
                    <Cards
                    clasName="economy_card"
                    imgclassdiv="economy_resimg"
                    src={item.file_url}
                    contentcls="economy_respara"
                    titlecls="menu_title title_response"
                    heading={item.industry_details[0].name}
                    paracls="manu_left_para"
                    title={item.title}
                    publish={item.publish}
                    authorcls="manu_author_para"
                    author={item.author_details[0].name}
                    />
                  )
                })}  
            
            
      </div>
      <Advertisment  img="./image/ad2.png"/>
      <div className="secondadvertisment">
        <h5 className="sideadvertisment_response " style={{textAlign: 'center'}}>Advertisement</h5>
        <img className="sideadd_img" src="./image/sideadd.png" alt="addimage" />
    </div>
    </div>
  );
}

export default Manufacturing;
