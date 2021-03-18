// == Import : npm
import ReactFamilyTree from 'react-family-tree';
import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'src/api';
// import PinchZoomPan from './PinchZoomPan';
import FamilyNode from './FamilyNode';
import baseurl from 'src/middlewares/baseurl';
import data from './data.json'

// == Import : local
import './styles.scss';

// == Composant
const Tree = () => {
  const [tree, setTree] = useState(null);
  // const loadTree = async () => {
  //   try {
  //     const response = await axios.get(`${baseurl}4/tree`);
  //     console.log("response", response.data)
  //     setTree(response.data);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // loadTree();
    axios.get(`${baseurl}9/tree`)
      .then((result) => {
      console.log("result.data", result.data);
      console.log('****',JSON.stringify(result.data))
      if (result && result.data) {
        setTree(result.data);
      }})
      .catch((error) => {(console.log(`cath tree`, error))})
  }, []);
  const WIDTH = 200;
  const HEIGHT = 200;
  return (
    <div className='tree'>
     {tree && Object.keys(tree).length ? (
        <ReactFamilyTree
          nodes={tree.familyTree}
          rootId={tree.rootId}
          width={WIDTH}
          height={HEIGHT}
          renderNode={(node) => (
            <FamilyNode
              key={node.id}
              node={node}
              style={{
                height: "100%", 
                width: "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: WIDTH,
                height: HEIGHT,
                transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
              }}
            />
          )}
        />
      ) : (
        <h2 className="story-title">Loading</h2>
      )}
                    
      <NavLink to="/tree/addperson" activeClassName="menu-button-onPage"><button type="button" className="add-person-button"> + </button></NavLink>
    </div>
  )

}




// == Export
export default Tree;
