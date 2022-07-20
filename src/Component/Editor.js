import React from "react";
import Sideadd from "./Sideadd";

function Editor(props) {
  return (
    <div className="container">
      <div className="editor_main">
        <h1 className="editor_head">{props.headtitle}</h1>
        <div className="editor_submain">
        <div className="editor_content1">
          <div className="editor_premium" >
            <img src={props.img} alt="editorimg" />
            <span className="premium_logo">PREMIUM</span>
            </div>
            <h5 className="heading_title">{props.lefttitle}</h5>
            <p className="editor-para">
              {props.leftpara}
            </p>
            <p className="author_para">
              30 September <span>.Madhurima Nandy</span>
            </p>
          </div>
          <div className="editor_content2">
            {props.edit.map((item) => {
              return (
                <div className="card_content">
                  <div className="card_content-response_img">
                    <img src={item.src} alt="cardone_image" />
                    
                  </div>
                  <div className="card_content_text">
                    <h3 className="heading_title">{item.title}</h3>
                    <p className="card-text2">{item.para}</p>
                    <p className="author_para">{item.author}</p>
                  </div>
                </div>
              );
            })}
           </div> 
          <div className="responsivesideadd">
            <Sideadd/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Editor;
