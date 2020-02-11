
import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
        <style jsx>{`
          div {
            background-color: lightblue;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;


// import React from 'react';
// import PropTypes from 'prop-types';
//
// function Ticket(props){
//   var ticketStyles = {
//     backgroundColor: 'lightblue',
//     fontSize: '24px',
//     color: 'orange',
//     width: '55%',
//     display: 'block',
//     height: '400px',
//     // margin: '50px',
//     float: 'right'
//   };
//
//   var clamSize = {
//     width: '350px'
//   };
//   return (
//     <div style={ticketStyles}>
//       <h3>{props.location} - {props.names}</h3>
//       <p><em>{props.issue}</em></p>
//       <hr/>
//       <img style={clamSize} src= 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Clams_on_Sandy_Hook_beaches_-_panoramio.jpg'/>
//     </div>
//   );
// }
//
// Ticket.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };
//
// export default Ticket;
