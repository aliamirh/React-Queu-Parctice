import React from 'react';
import PropTypes from 'prop-types';

function Example(props) {

  return (
   <div>
      <style jsx global>{`
        .color-toggle {
          background-color: green;
        }
        .color-toggle:hover {
          background-color: pink;
        }
      `}</style>
      <div className="color-toggle">
      <p>{props.sentence}</p>
      </div>
  </div>
  );
}

Example.propTypes = {
  sentence: PropTypes.string.isRequired
};

export default Example;
