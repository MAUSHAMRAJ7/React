import './App.css';
import './Responsive.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import Advertisment from './Component/Advertisment';
import Col from './Component/Col';
 import Editor from './Component/Editor';
import Manufacturing from './Component/Manufacturing';
 import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Stories from './Component/Stories';
import Footer from './Footer';
import Events from './Component/Events';
import Vccircle from './Component/Vccircle';
import Vcc from './Component/Vcc';
import Follow from './Component/Follow';
import Loader from './Loader';

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] =useState(true);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185")
      .then((response) => {
        console.log(response.data.section_list[0].stories_list);
        setLoad(false);
        setData(response.data.section_list);
      });
  });
  return (
    
    <div className="Maincontainer">
      <Navbar/>
     {load ? <Loader/> : null}
      
      
      {
    data.map((item,index)=>{
      if(item.section_slug ==="top-stories"){
        return(<>
        <Advertisment advertiseclass="Advertis1" img="./image/ad1.png" />
          <Manufacturing item={item} />
          <Advertisment advertiseclass="advertis" img="./image/ad2.png"/>
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
            <Advertisment advertiseclass="advertis"  img="./image/ad2.png"/>
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
            <Advertisment advertiseclass="advertis" img="./image/ad2.png"/>
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
            <Advertisment advertiseclass="advertis" img="./image/ad2.png"/>
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
             <Advertisment advertiseclass="advertis"  img="./image/ad2.png"/>
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
             <Footer/>
            </>)
          }
          return null;
    })
    
  }
  


  
  {/* <Footer/> */}
    </div>
  );
}

export default App;
