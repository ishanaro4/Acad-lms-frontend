import React from 'react';
import './Placement.css';
function Placement() {
    return(
        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
    TECHNICAL
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <li>
      <a className="dropdown-item" href="#">
        Coding &raquo;
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item" href="#">Dynamic Programing</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Stack and Queue</a>
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
          <a className="dropdown-item" href="#">DBMS</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Operating System</a>
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
          <a className="dropdown-item" href="#">Algorithm</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Data Structure</a>
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
          <a className="dropdown-item" href="#">Puzzle</a>
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

export default Placement;