import './App.css';
import './Responsive.css';
import Advertisment from './Component/Advertisment';
import Col from './Component/Col';
import Economy from './Component/Economy';
import Editor from './Component/Editor';
import Manufacturing from './Component/Manufacturing';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Stories from './Component/Stories';
import Footer from './Footer';
import Events from './Component/Events';
import Col2 from './Component/Col2';
import Eventdata from './Database/Eventdata';
import Tmtdata from './Database/Tmtdata';
import Techcircledata from './Database/Techcircledata';
import Mergerdata from './Database/Mergerdata';
import Financialsdata from './Database/Financialsdata';
import Partnerdata from './Database/Partnerdata';
import Foundersdata from './Database/Foundersdata';
import Vccircle from './Component/Vccircle';
import Vcccircledata from './Database/Vcccircledata';
import Vcc from './Component/Vcc';
import {Editordata,Popular} from './Database/Editordata';
import Follow from './Component/Follow';

function App() {
  return (
    
    <div className="Maincontainer">
      <Navbar/>
      <Advertisment img="./image/ad1.png" />
      <Manufacturing/>
       <Economy/>
      <Editor edit={Editordata} headtitle={"Editor’s Pick"} img={"./image/editioreco.png"} lefttitle={"ECONOMY"} leftpara={"EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall"} />
       <Follow/>
      <Col2 card={Partnerdata} title={"Limited Partner"}/>
      <Advertisment img="./image/ad2.png"/>
      <Vccircle card={Vcccircledata} head={"VCCircle Premium"}/>
      <Events card={Eventdata} title={"Upcoming Events"}/>
      <Col2 card={Foundersdata} title={"Founders"}/>
      <Advertisment img="./image/ad2.png"/>
      <Editor edit={Popular} headtitle={"Most Popular"} img={"./image/popular1.png"} lefttitle={"TMT"} leftpara={"Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax"}/>
      <Vcc/>
      <Col card={Tmtdata} title={"TMT"}/>
      <Signup/>
      <Col card={Techcircledata} title={"TechCircle"}/>
      <Advertisment img="./image/ad2.png"/>
      <Col card={Mergerdata} title={"Mergers & Acquisitions"}/>
      <Col card={Financialsdata} title={"Financials"}/>
      <Stories/>
      <Footer/> 
    </div>
  );
}

export default App;
