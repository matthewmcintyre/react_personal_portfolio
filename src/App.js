import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import MyClass from "./components/MyClass";
import Header from "./components/Header/Header";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #fefae0;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Header />
    <FirstSection />
    <SecondSection />
    <MyClass />
  </Provider>
);

export default App;
