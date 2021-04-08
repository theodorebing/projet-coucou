// == Import : npm
import ReactFamilyTree from 'react-family-tree';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'src/api';
// import PinchZoomPan from './PinchZoomPan';
import baseurl from 'src/middlewares/baseurl';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import FamilyNode from './FamilyNode';
import PlusButton from '../PlusButton';

import './styles.scss';

const Tree = ({ noHelpButtons, familyId }) => {
  const [tree, setTree] = useState(null);
  useEffect(() => {
    noHelpButtons();
    axios.get(`${baseurl}${familyId}/tree`)
      .then((result) => {
        if (result && result.data) {
          setTree(result.data);
        }
      })
      .catch((error) => {
        (console.log('cath tree', error));
      });
  }, []);
  const WIDTH = 350;
  const HEIGHT = 350;
  return (
    <div className="tree">
      <div className="tree-flex">
        <FamilyNameTitle />
        {tree && Object.keys(tree).length ? (
          <>
            <ReactFamilyTree
              nodes={tree.familyTree}
              rootId={tree.rootId}
              width={WIDTH}
              height={HEIGHT}
              renderNode={(node) => (
                <FamilyNode
                  key={node.id}
                  node={node}
                // name={node}
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: WIDTH,
                    height: HEIGHT,
                    transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
                  }}
                />
              )}
            />
            <div />
          </>
        ) : (
          <>
            <h2 className="tree-flex-loading">Loading</h2>
            <div />
          </>
        )}
      </div>
      <div className="tree-plusButton-div">
        <NavLink to="/tree/addpersontree"><PlusButton className="tree-plusButton" /></NavLink>
      </div>
    </div>
  );
};

// == Export
export default Tree;
