import React from 'react';
import Tab from "../components/Tab";
import './index.css';



export default () => {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab>
            <a>Home</a>
          </Tab>
          <Tab>
            <a>About</a>
          </Tab>
          <Tab>
            <a>Feature</a>
          </Tab>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
};
