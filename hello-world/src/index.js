import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bgm from './asset/image/background image.jpg';
import Bgm_green from './asset/image/Stall image green.png';
import InvalidName from './asset/image/invalid-name.png';
import InvalidName1 from './asset/image/invalid-name1.png';
import InvalidName2 from './asset/image/invalid-name2.png';
import AcrImage from './asset/image/Acr image.png';
import WebIcon from './asset/image/web.png';
import EmailIcon from './asset/image/email.png';
import AddIcon from './asset/image/add.png';
import FaxIcon from './asset/image/fax.png';
import TelIcon from './asset/image/tel.png';

import Back from './asset/image/back.png';
import ProductsList from './asset/image/products list green.png';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className="root_body">
      <img src={Bgm} className="background-image" alt='Bgm'></img>
      <div className="Bgm_green" >
        <img src={Bgm_green} alt="Bgm_green" className="Stall-image-green"></img>
        <div className="Bgm_store">
          <img src={InvalidName} alt="InvalidName" className="InvalidName-img"></img>
          <img src={InvalidName1} alt="InvalidName1" className="InvalidName1-img"></img>
          <img src={InvalidName2} alt="InvalidName2" className="InvalidName2-img"></img>
          <button className="back_btn">
            <img src={Back} alt="Back" className="Back-img"></img>
          </button>
          <button className="ProductsList_btn">
            <img src={ProductsList} alt="ProductsList" className="ProductsList-img"></img>
          </button>
          <span className="Text-Style">
            流亞科技股份有限公司
          </span>
          <span className="Text-Style-2">
            Logic Art Automation Co., Ltd
          </span>
          <div className='AcrImage_div'>
            <img src={AcrImage} alt="AcrImage" className="AcrImage-img"></img>
            <img src={WebIcon} alt="WebIcon" className="WebIcon-img"></img>
            <div className='AcrImage_index_div'>
              <span className="Arc_Text-Style">
                <img src={EmailIcon} alt="EmailIcon" className="EmailIcon-img" style={{ float: "left" }}></img> 
                <h1>joseph.lo@logicart.com.tw</h1>
              </span>
              <span className="Arc_Text-Style">
                <img src={TelIcon} alt="TelIcon" className="TelIcon-img" style={{ float: "left" }}></img>
                <h1>+886-2-2999-2899</h1>
              </span>
              <span className="Arc_Text-Style">
                <img src={FaxIcon} alt="FaxIcon" className="FaxIcon-img" style={{ float: "left" }}></img>
                <h1>+886-2-2999-2899</h1>
              </span>
              <span className="Arc_Text-Style">
                <img src={AddIcon} alt="AddIcon" className="AddIcon-img" style={{ float: "left" }}></img>
                <h1>8F-7, No.16, Lane 609, Sec.5, Chung-Shin Road, San-Chung Dist., New Taipei City, Taiwan</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
