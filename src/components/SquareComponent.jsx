import React from "react";

const SquareComponent = (props) => {
  const classes = props.className
    ? `${props.className} squarestyle`
    : "squarestyle";

  return (
    <span className={classes}>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </span>
  );
};

export default SquareComponent;
