import React from 'react';
import avatar from "src/assets/images/avatar.png"

const FamilyNode = ({node, style}) => {
console.log("node", node);
  return (
    <div style={style} className='person__tree'>
       <img className='picture__person' src={avatar}
          />
          {/* {node.lastName} */}
    </div>
  );
}

export default FamilyNode;

