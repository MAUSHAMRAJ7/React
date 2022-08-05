import React from "react";
import { Cards } from "./Cards";

function Stories(props) {
  return (
    <div>
      <div className="container" key={props.item.stories_list[0].feid}>
        <div className="stories_main">
          <h3 className="editor_head">{props.item.section_name}</h3>
              <div className="cardimage1">
                {props.item.stories_list.map((item) => {
                  return (
                    <Cards
                      contimgMain="card_content1"
                      imgclassdiv="stories_cardimage"
                      src={item.file_url}
                      heading={item.industry_details[0].name}
                      title={item.title}
                      publish={item.publish}
                      author={item.author_details[0].name}
                      contentcls="stories_card_text"
                      titlecls="morestories_title"
                      paracls="morestories_title_para"
                      authorcls="morestories_author_para"
                    />
                  );
                })}
              </div>
            </div>
      </div>
    </div>
  );
}

export default Stories;
