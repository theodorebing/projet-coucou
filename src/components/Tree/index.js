// == Import : npm
import ReactFamilyTree from 'react-family-tree';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'src/api';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import baseurl from 'src/middlewares/baseurl';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import FamilyNode from './FamilyNode';
import './styles.scss';

const Tree = ({ noHelpButtons }) => {
  const [tree, setTree] = useState(null);
  const [sizeScreenX, setSizeScreenX] = useState(null);
  useEffect(() => {
    noHelpButtons();
    setSizeScreenX(screen.width)
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
  // distance between tree nodes
  const WIDTH = 350;
  const HEIGHT = 350;
  // **************
  return (
    <div className="tree">
      {tree && Object.keys(tree).length ? (
        <>
          <FamilyNameTitle />
          { sizeScreenX < 800 ? (
            <TransformWrapper
              defaultScale={0.4}
              options={{
                minScale: 0.3,
                maxScale: 2,
                limitToBounds: false,
              }}
              zoomIn={{
                animationType: 'easeInQuad'
              }}
              wheel={{ step: 50 }}
            >
              <TransformComponent>
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
                </div>
              </TransformComponent>
            </TransformWrapper>
          ) : (
            <TransformWrapper
              defaultScale={1}
              options={{
                minScale: 0.8,
                maxScale: 1.5,
                limitToBounds: false,
              }}
              doubleClick={{
                mode: 'reset'
              }}
              wheel={{ step: 2 }}
            >
              <TransformComponent>
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
                </div>
              </TransformComponent>
            </TransformWrapper>
          )}
        </>
      ) : (
        <h2 className="story-title">Loading</h2>
      )}
      <NavLink to="/tree/addpersontree"><button type="button" className="plusButton-button"> + </button></NavLink>
    </div>
  );
};

// == Export
export default Tree;
