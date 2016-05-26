import React from 'react';

const Tile = ({onClick}) => {
  // const onClick = props.onClick
  return (
    <div onClick={() => onClick()} className="tile">
    </div>
  );
};

export default Tile;
