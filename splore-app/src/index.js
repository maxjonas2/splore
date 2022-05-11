import ReactDom from 'react-dom/client';
import React from 'react';
import "./css/main.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './elements/page_templates/Homepage';
import Teste from './elements/components/Teste';
import firebaseConfig from './config/firebaseConfig';
import {initializeApp} from 'firebase/app'

export const firebaseApp = initializeApp(firebaseConfig);

const App = () => {
   
   return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/teste" element={<Teste/>}/>
        </Routes>
   </BrowserRouter>)

}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)

