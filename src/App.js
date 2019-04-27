import React from "react";
import styled, { keyframes } from "styled-components";
import rialo from "./assets/rialo.svg";
import logot from "./assets/logoT.svg";
import {
  DollarCircle,
  Bell,
  Home,
  User,
  History
} from "styled-icons/boxicons-regular/";
import { Qrcode, Search } from "styled-icons/icomoon/";
function App() {
  return (
    <>
      <StApp>
        <StHeader>
          <div className="logoContainer">
            <a className="logo" href="/d" alt="rialo Homepage" />
          </div>
          <div className="menu">
            <a href="/s" href="/s" className="menu-item">
              <Home size="32" title="شارژ کردن" />
              خانه
            </a>
            <a href="/s" className="menu-item">
              <User size="32" title="شارژ کردن" />
              پروفایل
            </a>
            <a href="/s" className="menu-item">
              <History size="32" title="شارژ کردن" />
              تبادلات
            </a>
          </div>
          <div className="title">
            <div className="title-item">
              <DollarCircle size="32" title="شارژ کردن" />۰ تومان
            </div>
            <div className="title-item">
              <Bell size="32" title="اطلاعیه ها" />
              اطلاعیه ها
            </div>
            <div className="logot">
              <img src={logot} alt="adf" height="30px" />
            </div>
          </div>
        </StHeader>
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
        <StFooter>Footer</StFooter>
      </StApp>
    </>
  );
}

export default App;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StApp = styled.div`
  margin: 40px;
  direction: rtl;
  background-color: #eee;
  border-radius: 50px;
`;
const StHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .title {
    .title-item {
      margin: 0 0.2em;
      padding: 0.4rem 0.8rem;
      color: white;
      background-color: #494a4c;
      border-radius: 500px;
      &:hover {
        color: orange;
      }
    }
    height: 60px;
    background-color: #2d2f2f;
    width: inherit;
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logot {
      margin: 0 0.2em;
    }
  }
  .menu {
    height: 60px;
    background-color: #2d2f2f;
    width: inherit;
    flex-grow: 1;
    padding-right: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .menu-item {
      text-decoration: none;
      margin: 0 0.2em;
      padding: 0.4rem 0.8rem;
      color: white;
      border-bottom: 2px solid orange;
      &:hover {
        color: orange;
        border-bottom: 2px solid #fff;
      }
    }
  }
  .logoContainer {
    flex-basis: 80px;
    height: 60px;
    background-color: #2d2f2f;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .logo {
    display: block;
    position: relative;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #2d2f2f;
    &:after {
      content: "";
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #2d2f2f;
      background-image: url(${rialo});
      background-size: contain;
      position: absolute;
      overflow: hidden;
    }
    &:hover:after {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

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
const StFooter = styled.footer`
  display: block;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  background: rgb(46, 204, 113);
  color: rgb(255, 255, 255);
  padding: 1rem;
  margin-bottom: 0px;
`;
