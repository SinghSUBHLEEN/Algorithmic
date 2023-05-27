import { React, useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListElement from "../ListElement/listele";
import axios from "axios";

import Nav from "react-bootstrap/Nav";

import Tab from "react-bootstrap/Tab";

const arr = [
  "Basics",
  "Arrays and Hashing",
  "Searching and Sorting",
  "Binary Search",
  "Prefix Sum",
  "Sets and Hashmaps",
  "Strings",
  "DFS",
  "BFS",
  "Constructive Algorithms",
  "Stack",
  "Queue",
  "Two pointers",
  "Recursion and Backtracking",
  "Trees",
  "Dynamic Programming",
  "Graphs",
  "Tries",
  "Segment trees and BIT",
  "Bit manipulation",
  "Greedy",
];
let obj;
const Home = () => {
  let k;
  let y;
  const [i, seti] = useState(0);
  const [problems, setProblems] = useState([]);
  const [r, setR] = useState("");

  return (
    <div>
      <Navbar />
      <h6 className="homePageTitle">
        Prepare by Roadmaps and practice problems
      </h6>
      {arr.map((it) => {
        return <ListElement topic={it} arrP={r} difficulty="Easy" />;
      })}
    </div>
  );
};

export default Home;
