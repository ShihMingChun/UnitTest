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
          <img src={AcrImage} alt="AcrImage" className="AcrImage-img"></img>
          <button className="back_btn">
            <img src={Back} alt="Back" className="Back-img"></img>
          </button>
          <button className="ProductsList_btn">
            <img src={ProductsList} alt="ProductsList" className="ProductsList-img"></img>
          </button>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
