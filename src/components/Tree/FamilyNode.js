import React from 'react';
import avatarWoman from 'src/assets/images/avatar-woman.png';
import avatarMan from 'src/assets/images/avatar-man.png';


const FamilyNode = ({ node, style }) => {
  console.log('node', node.gender);
  return (
    <div style={style} className="person__tree">
      {node.gender === 2 ? (
        <>
          <img
            className="person__tree__picture"
            src={avatarMan}
            alt="profil"
          />
        </>
      ) : (
        <img
          className="person__tree__picture"
          src={avatarWoman}
          alt="profil"
        />
      )}
      <div className="person__tree__name">
        {node.firstName} {node.lastName}
      </div>
    </div>
  );
};

export default FamilyNode;
