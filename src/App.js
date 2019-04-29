import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/AboutSection.container";
import SummarySection from "./components/SummarySection/SummarySection.container";
import ProjectSection from "./components/ProjectSection/ProjectSection.container";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Bitter');

  body {
    background: #fefae0;
    font-family: 'Bitter', serif;
   
  }
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display:none;
    }
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />

    <Header />
    <AboutSection />
    <SummarySection />
    <ProjectSection />
    <Footer />
  </Provider>
);

export default App;
