import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import  Container  from './Componets/container';
// import TextForm from './Componets/TextForm';
import CardInfo from './Componets/cardInfo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> 
   
    <Container />
    <index/> */}
    {/* <TextForm/> */}
   {/* <InputText/> */}
   <CardInfo/>

  </React.StrictMode>
);

reportWebVitals();
