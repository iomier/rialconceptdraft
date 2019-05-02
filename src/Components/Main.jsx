import React from "react";
import styled from "styled-components";
import { Qrcode, Search } from "styled-icons/icomoon/";

const Main = () => {
  return (
    <StMain>
      <StButtons>
        <a href="/sdf" className="btn btn-right">
          <Qrcode size="64" />
          <h4>اسکن</h4>
        </a>
        <a href="/asd" className="btn btn-left">
          <Search size="64" />
          <h4>جست‌وجو</h4>
        </a>
      </StButtons>
      <StShops>
        <h2>کسب و کارهای اطراف شما:</h2>
        <div className="grid">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
        </div>
      </StShops>
    </StMain>
  );
};

export default Main;

const StMain = styled.main`
  height: auto;
  padding: 20px;
  flex: 1 0 auto;
`;
const StButtons = styled.div`
  display: flex;
  justify-content: center;

  .btn {
    box-sizing: border-box;
    background-color: orange;
    padding: 30px;
    flex-basis: 500px;
    text-align: center;
    align-items: center;
    align-content: center;
    color: #000;
    text-decoration: none;
    h4 {
      padding: 0.5em;
      margin: 0;
    }
  }
  .btn-right:hover,
  .btn-left:hover {
    background-color: #2d2f2f;
    color: #fff;
  }
`;
const StShops = styled.div`
  margin: 2em 0;
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .grid-item {
    width: 30%;
    margin: 10px;
    height: 300px;
    background-color: palegreen;
  }
`;
