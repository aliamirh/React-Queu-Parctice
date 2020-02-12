import React from 'react';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import Header from './Header';
import ExampleList from './ExampleList';
import { Switch, Route } from 'react-router-dom';
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
      <Switch>
      <Route exact path='/' component={TicketList} />
      <Route path='/newticket' component={NewTicketForm} />
      <Route exact path='/picturelist' component={PictureList} />
      <Route exact path='/examplelist' component={ExampleList} />
      </Switch>


    </div>
  );
}

export default App;
