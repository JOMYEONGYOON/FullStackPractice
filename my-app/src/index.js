import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import InsertDept from './components/InsertDept';
import DeptRead from './components/DeptRead';
import DeptDetail from './components/DeptDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<BrowserRouter>

<Routes>
    <Route path="/" element={<DeptRead />}></Route>
    <Route path="/deptDetail/:deptno" element={<DeptDetail/>}  />
    
    <Route path="/insert" element={<InsertDept />} />

</Routes>

</BrowserRouter>

);

reportWebVitals();
