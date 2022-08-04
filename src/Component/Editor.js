import React from "react";
import { Cards } from "./Cards";
import Sideadd from "./Sideadd";
import Signup from "./Signup";

function Editor(props) {
  return (
    <div className="container" key={props.item.stories_list[1].feid}>
      <div className="editor_main" >
        <div className="editor_submain">
        <div className="editor_content1">
        <p className="editor_head">{props.item.section_name}</p>
          <div className="editor_premium" >
            <img src={props.item.stories_list[0].file_url} alt="editorimg" />
            <span className="premium_logo">PREMIUM</span>
            </div>
            <div className="editor_contents">
            <h5 className="heading_title">{props.item.stories_list[0].industry_details[0].name}</h5>
            <p className="editor-para">
              {props.item.stories_list[0].title}
            </p>
            <p className="author_para">
              30 September <span>.{props.item.stories_list[0].author_details[0].name}</span>
            </p>
            </div>
          </div>
          <div className="editor_content2">
            {props.item.stories_list.map((item,index) => {
              if(index===0) return null;
              return (
                <Cards
                contimgMain="card_content"
                imgclassdiv="card_content-response_img"
                src={item.file_url}
                contentcls="card_content_text"
                titlecls="heading_title"
                heading={item.industry_details[0].name}
                paracls="card-text2"
                title={item.title}
                publish={item.publish}
                authorcls="author_para"
                author={item.author_details[0].name}
                />

              );
            })}
           </div> 
          <div className="responsivesideadd">
            <Sideadd/>
          </div>
        </div>

      </div>
      <Signup/>
    </div>
  );
}

export default Editor;
