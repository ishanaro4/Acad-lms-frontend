import React from 'react';
import './Placement2.css';
import MDInput from 'components/MDInput';
import {useState} from 'react';

function Add(props) {
    const saveData = (tag)=>{

    }
    const [link, setLink] = useState('');
    return(
        <div className="dropdown center-aligned-items">
  <MDInput label="Document link" value={link} onChange={(e)=>setLink(e.target.value)}/>
  <br/>
  <button className="btn btn-primary dropdown-toggle" type="button"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Adding Placement documents
  </button>
  
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <li>
      <a className="dropdown-item" href="#">
        Coding &raquo;
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item" onClick={()=>{saveData('DP')}} href="#">Dynamic Programing</a>
        </li>
        <li>
          <a className="dropdown-item" onClick={()=>{saveData('SQ')}} href="#">Stack and Queue</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Algorithm &raquo; </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="#">Analysis Complexity</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Corman Book</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item" href="#">LInked LIst</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Hashing and Sliding Window</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Graphs</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Heap</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Subjects &raquo;
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item"  onClick={()=>{props.onSelect('DBMS')}} href="#">DBMS</a>
        </li>
        <li>
          <a className="dropdown-item" onClick={()=>{props.onSelect('OS')}} href="#">Operating System</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Langauge&raquo; </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="#">Java</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">C++</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Python</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item"  onClick={()=>{props.onSelect('Algo')}} href="#">Algorithm</a>
        </li>
        <li>
          <a className="dropdown-item"  onClick={()=>{props.onSelect('DS')}} href="#">Data Structure</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Others &raquo;
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item" href="#">System Design</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Puzzles</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Coding Platforms &raquo; </a>
          <ul className="dropdown-menu dropdown-submenu">
            <li>
              <a className="dropdown-item" href="#">Leetcode</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">GFG</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Interview Bit</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Conding Ninja</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="dropdown-item" href="#">Resume Buildings</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Imp Links</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
    );
}

export default Add;