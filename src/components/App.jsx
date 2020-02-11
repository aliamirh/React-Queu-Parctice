import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import ExampleList from './ExampleList';
import PictureList from './PictureList'


// import MyStyledComponent from './MyStyledComponent';


function App(){
  var cWholeApp = {
    textAlign: 'center',
    backgroundColor: 'lightgray',
    height: '2000px'
  };
  return (
    <div style = {cWholeApp}>
      <Header/>
      <TicketList/>
      <ExampleList/>
      <PictureList/>


    </div>
  );
}

export default App;
