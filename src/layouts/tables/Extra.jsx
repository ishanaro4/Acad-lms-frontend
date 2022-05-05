import React from "react";

import "./Extra.css";

function Extra() {
  return (
    <div className="dropdown">
   <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton3"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Extra Activity
   </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <li>
      <a className="dropdown-item" href="#">
        Group Discussions &raquo;
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item" href="#">Discussion</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Debate</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        MR Round Activity &raquo;
      </a>
      <ul className="dropdown-menu dropdown-submenu">
        <li>
          <a className="dropdown-item" href="#">Solving Skills</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Imp quesitons</a>
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

export default Extra;