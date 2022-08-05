import './App.css';
import './Responsive.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import Advertisment from './Component/Advertisment';
import Col from './Component/Col';
// import Economy from './Component/Economy';
 import Editor from './Component/Editor';
import Manufacturing from './Component/Manufacturing';
 import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Stories from './Component/Stories';
import Footer from './Footer';
import Events from './Component/Events';
// import Col2 from './Component/Col2';
// import {Eventdata,Updatedataresponse  }from './Database/Eventdata';
// import Tmtdata from './Database/Tmtdata';
// import Techcircledata from './Database/Techcircledata';
// import Mergerdata from './Database/Mergerdata';
// import Financialsdata from './Database/Financialsdata';
// import Partnerdata from './Database/Partnerdata';
// import Foundersdata from './Database/Foundersdata';
import Vccircle from './Component/Vccircle';
// import Vcccircledata from './Database/Vcccircledata';
import Vcc from './Component/Vcc';
// import {Editordata,Popular} from './Database/Editordata';
import Follow from './Component/Follow';
import Upcomingevent from './Component/Upcomingevent';
// import Upcomingevent from './Component/Upcomingevent';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185")
      .then((response) => {
        console.log(response.data.section_list[0].stories_list);
        setData(response.data.section_list);
      });
  });
  return (
    
    <div className="Maincontainer">
      <Navbar/>
      <Advertisment img="./image/ad1.png" />
      {/* <Manufacturing/> */}
       {/* <Economy/> */}
       {/* <Advertisment img="./image/ad2.png"/> */}
      {/* <Editor edit={Editordata} headtitle={"Editor’s Pick"} img={"./image/editioreco.png"} lefttitle={"ECONOMY"} leftpara={"EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall"} />
      //  <Follow/>
      // <Col2 card={Partnerdata} title={"Limited Partner"}/>
      // <Advertisment img="./image/ad2.png"/>
      // <Vccircle card={Vcccircledata} head={"VCCircle Premium"}/>
      // <Upcomingevent card={Updatedataresponse}/>
      // <Events card={Eventdata} title={"Upcoming Events"}/>
      // <Col2 card={Foundersdata} title={"Founders"}/>
      // <Advertisment img="./image/ad2.png"/>
      // <Editor edit={Popular} headtitle={"Most Popular"} img={"./image/popular1.png"} lefttitle={"TMT"} leftpara={"Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax"}/>
      // <Vcc/>
      // <Col card={Tmtdata} title={"TMT"}/>
      // <Signup/>
      // <Col card={Techcircledata} title={"TechCircle"}/>
      // <Advertisment img="./image/ad2.png"/>
      // <Col card={Mergerdata} title2={"Mergers & Acquisitions"} title3={"M&A"}/>
      {/* <Col className="mergers" card={{Mergerdata}} title={"M&A"}/> */}
      {/* <Col card={Financialsdata} title={"Financials"}/>
      <Stories/> */}
      {/* <Footer/>  */} 

      {
    data.map((item,index)=>{
      if(index ===0){
        return(<>
          <Manufacturing item={item} />
          <Advertisment  img="./image/ad2.png"/>
        </>
        )
      }

      if(item.section_slug ==="editors-pick"){
        return(<>
        <Editor item={item} />
        <Signup/>
        <Follow/>
        </>
        )
        }
        if(item.section_slug === "limited-partner"){
          return(
            <>
            <Col item={item}/>
            <Advertisment  img="./image/ad2.png"/>
            </>
          )
        }
        if(item.section_slug === "vccircle-premium"){
          return(<>
          <Vccircle item={item}/>
          </>
          );
        }
        if(item.section_slug === "upcoming-events"){
          return(<>
          <Events/>
          {/* <Upcomingevent/> */}
          
          </>);
        }
        if(item.section_slug === "founders"){
          return(
            <>
            <Col item={item}/>
            <Advertisment  img="./image/ad2.png"/>
            </>
          )
        }
        if(item.section_slug ==="most-popular"){
          return(<>
          <Editor item={item} />
          </>
          )
          }
          if(item.section_slug === "vcc-tv"){
            return(<>
            <Vcc item={item}/>
            <Advertisment  img="./image/ad2.png"/>
            </>);
          }

          if(item.section_slug === "tmt"){
            return(<>
             <Col item={item}/>
            </>)
          }

          if(item.section_slug === "financials"){
            return(<>
             <Col item={item}/>
             <Advertisment  img="./image/ad2.png"/>
            </>)
          }
          if(item.section_slug === "more-stories"){
            return(<>
             <Stories item={item}/>
            </>)
          }

          if(item.section_slug === "mergers-acquisitions"){
            return(<>
             <Col item={item}/>
            </>)
          }
    })
    
  }
  <Footer/>
    </div>
  );
}

export default App;
