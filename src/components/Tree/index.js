// == Import : npm
import ReactFamilyTree from 'react-family-tree';
import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'src/api';
// import PinchZoomPan from './PinchZoomPan';
import baseurl from 'src/middlewares/baseurl';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import FamilyNode from './FamilyNode';

import './styles.scss';

const Tree = () => {
  const [tree, setTree] = useState(null);
  useEffect(() => {
    axios.get(`${baseurl}9/tree`)
      .then((result) => {
        if (result && result.data) {
          setTree(result.data);
        }
      })
      .catch((error) => {
        (console.log('cath tree', error));
      });
  }, []);
  const WIDTH = 300;
  const HEIGHT = 300;
  return (
    <div className="tree">
      {tree && Object.keys(tree).length ? (
        <>
          <FamilyNameTitle />
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
          <div className="plusButton-div">
            <NavLink to="/tree/addperson"><button type="button" className="plusButton-button"> + </button></NavLink>
          </div>
        </>
      ) : (
        <h2 className="story-title">Loading</h2>
      )}
    </div>
  );
};

// == Export
export default Tree;
