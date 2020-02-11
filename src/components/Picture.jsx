import React from 'react';
import PropTypes from 'prop-types';

function Picture(props){

  var imageSize = {
    width: '150px',
    padding: '20px',
    borderRadius: '50%'

  }

  var divStyle  = {
    display: 'inline-block',
    borderStyle: 'double',
    borderColor: 'lightgray',
    margin: '20px',
    height: '220px',
    width: '220px'
  }

var nameStyle ={
  backgroundColor: 'lightblue',
  lineHeight: '30px'
}



  return (
    <div style={divStyle}>
    <h3 style={nameStyle}>{props.names}</h3>
    <img style = {imageSize} src={props.url} alt={props.names} />
    </div>
  );
}

Picture.propTypes = {
  names: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Picture;
