import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import medium from "./medium.svg";
import linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";

import "./App.css";
import { Page } from "./components/Page";

class App extends Component {
  render() {
    return (
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Page fullpageApi={fullpageApi}>
                <div className="content">
                  <h1>UX/UI Designer</h1>
                  <h2>Karla Vidal Chi</h2>
                </div>
              </Page>
              <Page fullpageApi={fullpageApi} legend="Karla Vidal Chi">
                <div className="personal">
                  <div>
                    <p>
                      Hello, I'm Karla, a digital designer focused on UX and UI
                      design. I'm a aesthetic and design lover.
                    </p>
                    <p>
                      I use Sketch, Flinto, InVision, Agile, Zeplin, SCRUM,
                      Photoshop, HTML and CSS, but I'm always learning.
                    </p>
                    <p>
                      I also studied fashion photography in TAI, a school in
                      Madrid.
                    </p>
                    <p>
                      If you think we can work together, you can contact me.
                    </p>
                    <p>kortraits@gmail.com</p>
                  </div>
                  <ul className="media">
                    <li>
                      <img className="logo" src={linkedin} alt="linkedin link"/>
                    </li>
                    <li>
                      <img className="logo" src={instagram} alt="instagram link"/>{" "}
                    </li>
                    <li>
                      <img className="logo" src={medium} alt="medium link"/>
                    </li>
                  </ul>
                </div>
              </Page>
              <Page fullpageApi={fullpageApi} legend="Popakorn">
                <div>
                  <p>
                    Popakorn it&apos;s a desktop app. Popakorn provides you with
                    personalized content based on your tastes on all the video
                    platforms to which you are subscribed (Netflix, HBO, etc)
                  </p>
                  <p>More information</p>
                </div>
              </Page>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default App;
