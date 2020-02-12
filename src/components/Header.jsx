import React from 'react';
import { Link } from 'react-router-dom';


function Header(){

  return (
    <div>
      <h1><span style={{ fontSize: 50}}>C</span>lam Queue!</h1>
      <hr></hr>
      <h3 className='ClamHeader'>Clam time, dude.</h3>
      <h3>Eat clams, dude.</h3>
      <h3>Hello clam, dude.</h3>
        <div>
          <h1>Help Queue</h1>
          <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/picturelist">Pictures</Link> | <Link to="/examplelist">Examples</Link>
        </div>
    </div>
  );
}

export default Header;
