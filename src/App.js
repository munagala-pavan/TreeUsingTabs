import './App.css';
import './tree.css';
import { Tabs } from 'antd';
import Example from './TreeWithLine.js';
import Example2 from './DirectoryTree.js';
import Basic from './Basic.js';
import SearchTree from './SreachableTree';
import ControlledTree from './ControlledTree.js';
import Virtual from './VirtualTree';
import React from 'react';

const { TabPane } = Tabs;

  function callback(key) {
  console.log(key);
    }
function App() {

  return (
    <div className="App">
      <Tabs defaultActiveKey="1" onChange={callback}>
      
      <TabPane tab="Tab 11" key="11">
      <Example />
      </TabPane>
      
      <TabPane tab="Tab 12" key="12">
      <Example2 />
      </TabPane>
      

      <TabPane tab="Tab 13" key="13">
      <SearchTree />
      </TabPane>


      <TabPane tab="Tab 14" key="14">
      <Basic />
      </TabPane>


      <TabPane tab="Tab 15" key="15">
      <ControlledTree /> 
      </TabPane>
     
      <TabPane tab="Tab 16" key="16">
      <Virtual />
      </TabPane>

      
      </Tabs>
    </div>
  );
}

export default App;
