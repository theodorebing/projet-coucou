import React from 'react';
import avatar from "./avatar.png"

const FamilyNode = ({node, style}) => {
  return (
    <div style={style} className='person__tree'>
       <img className='picture__person' src={avatar}
          />
          {node.id}
    </div>
  );
}

export default FamilyNode;
