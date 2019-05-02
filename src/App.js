import React, { Component } from "react";
import styled from "styled-components";
import ShopContext from "./context/shopContext";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default class App extends Component {
  state = {
    charge: ""
  };
  render() {
    return (
      <ShopContext.Provider>
        <StApp>
          <Header />
          <Main />
          <StFooter>Footer</StFooter>
        </StApp>
      </ShopContext.Provider>
    );
  }
}

const StApp = styled.div`
  margin: 40px;
  direction: rtl;
  background-color: #eee;
  border-radius: 50px;
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
