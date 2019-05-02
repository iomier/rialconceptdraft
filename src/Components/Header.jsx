import React from "react";
import rialo from "../assets/rialo.svg";
import logot from "../assets/logoT.svg";
import {
  DollarCircle,
  Bell,
  Home,
  User,
  History
} from "styled-icons/boxicons-regular/";
import styled, { keyframes } from "styled-components";
const Header = () => {
  return (
    <StHeader>
      <div className="logoContainer">
        <a className="logo" href="/d" alt="rialo Homepage" />
      </div>
      <div className="menu">
        <a href="/s" className="menu-item">
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
  );
};

export default Header;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
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
