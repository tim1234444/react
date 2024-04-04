import React, {  useState } from 'react';
import classes from './ToolTipComponent.module.css';



export default function ToolTipComponent({ children, text }) {
  const [showToolTip, setShowToolTip] = useState(false);

  function onMouseEnterHandler(){
    setShowToolTip(true);
  };

  function onMouseLeaveHandler() {
    setShowToolTip(false);
  };

  return(
      <div className={classes.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        {children}
        {showToolTip && <div className={classes.tooltip}>{text}</div>}
      </div>
  );
};
