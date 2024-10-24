import React from "react";
import "./NacerTrend.css";
function NacerTrend(props) {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const url = "https://openapi.naver.com/v1/datalab/search";

  return (
    <div>
      <h2> Naver 트렌드 검색</h2>
      <div className="input">
        <input />
        <div>
          <button>검색</button>
        </div>
      </div>
    </div>
  );
}

export default NacerTrend;
