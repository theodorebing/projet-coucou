// == Import : npm
import ReactFamilyTree from 'react-family-tree';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import PinchZoomPan from './PinchZoomPan';
import FamilyNode from './FamilyNode';
import data from './data.json'


// == Import : local
import './styles.scss';



// == Composant
const Tree = () => {
  const [tree, setTree] = useState([])
  const loadTree = async () => {
    // test on an external API before connecting our API back
    try {
      const response = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/');
      setTree(response.data.bodies[0].id);
      console.log(response.data.bodies[0].id)
    }
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTree();
  }, []);
  const WIDTH = 200;
  const HEIGHT = 200;
  return (
    <div className='tree'>
      {/* <PinchZoomPan
          min={0.5}
          max={2.5}
          captureWheel
          // className={styles.wrapper}
        > */}
      <ReactFamilyTree
        nodes={data}
        rootId={data[0].id}
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
      {/* </PinchZoomPan> */}
      <button type="button" className="add-person-button"> <NavLink to="/tree/addperson" activeClassName="menu-button-onPage">+</NavLink>  </button>
    </div>
  )

}

  ;



// == Export
export default Tree;
