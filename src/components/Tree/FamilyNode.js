import React from 'react';
import avatar from 'src/assets/images/avatar.png';

const FamilyNode = ({ node, style }) => {
  console.log('node', node);
  return (
    <div style={style} className="person__tree">
      <img
        className="person__tree__picture"
        src={avatar}
        alt="profil"
      />
      <div className="person__tree__name">
        {node.firstName} {node.lastName}
      </div>
    </div>
  );
};

export default FamilyNode;
