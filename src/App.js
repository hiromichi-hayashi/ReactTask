import React from 'react';
import { Tabs, Tab, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sonnet from './Sonnet';

function App() {
  return (

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home">
        <Sonnet />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <Sonnet />
      </Tab>
    </Tabs>
  );
}

export default App;
