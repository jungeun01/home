import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.css";
import Count from "./count/Count";
function HomePage(props) {
  return (
    <div className="app">
      <Link to="/count">클릭 카운터</Link>
      <Link to="/value"> 입력 필드 값 추적</Link>
      <Link to="/todo">간단한 To-Do 리스트</Link>
      <Link to="/temper">간단한 온도 변환기</Link>
    </div>
  );
}

export default HomePage;
