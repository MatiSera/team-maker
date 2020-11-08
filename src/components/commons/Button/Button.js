import React from 'react';

import './button.css';

const Button = ({backgroundColor, text, color, disabled}) => {

  return (
    <div className="button" style={{backgroundColor: backgroundColor, color: color, cursor: disabled ? 'not-allowed' : 'pointer'}}>
      <p className="button__text">{text}</p>
    </div>
  );
};

export default Button;