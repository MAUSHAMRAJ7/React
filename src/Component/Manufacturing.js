import React from "react";

function Manufacturing() {
  return (
    <div className="container">
      <div className="manufacturing_main">
        <div className="manufacturing_left">
          <h1 className="menu_title">MANUFACTURING</h1>
          <h3 className="manu_subcontent">
            Warburg Pincus set to acquire majority stake in auto parts maker
          </h3>
          <p className="manu_left_para">
            Private equity firm TPG, which is reportedly heading towards a
            public listing, said on Thursday it had appointed long-time company
            executive Todd Sisitsky as president, effective immediately.
          </p>

          <p className="manu_author_para">
            30 September <span>.Madhurima Nandy</span>
          </p>

          <button className="manufacturing_button">READ MORE</button>
        </div>
        
        <div className="manufacturing_right">
        <img src="./image/manufa.png" alt="manufacturing" />
        </div>
      </div>
      <div className="secondadvertisment">
        <h5 className="sideadvertisment_response " style={{textAlign: 'center'}}>Advertisement</h5>
        <img className="sideadd_img" src="./image/sideadd.png" alt="addimage" />
    </div>
    </div>
  );
}

export default Manufacturing;
