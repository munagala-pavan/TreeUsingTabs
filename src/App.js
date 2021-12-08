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
      
      <TabPane tab="Tab 1" key="1">
      <Example />
      </TabPane>
      
      <TabPane tab="Tab 2" key="2">
      <Example2 />
      </TabPane>
      

      <TabPane tab="Tab 3" key="3">
      <SearchTree />
      </TabPane>


      <TabPane tab="Tab 4" key="4">
      <Basic />
      </TabPane>


      <TabPane tab="Tab 5" key="5">
      <ControlledTree /> 
      </TabPane>
     
      <TabPane tab="Tab 6" key="6">
      <Virtual />
      </TabPane>

      
      </Tabs>
    </div>
  );
}

export default App;
