<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import Tree from "react-d3-tree";
import {
  NavLink,
} from 'react-router-dom';
import orgChart from './data'
import './styles.scss';
import avatar from "src/components/Tree/iconfinder-11-avatar-2754576_120520.png"


const foreignObjectProps = { width: 500, height: 500, x: -100, y: -20 };
const renderForeignObjectNode = ({ nodeDatum }) => {
  return (
    <>
    <g>
      <foreignObject {...foreignObjectProps} >
        <span className='name__person'>{nodeDatum.first_name ? `${nodeDatum.first_name}` : ''}</span>
        <figure className='figure'>
          <img className='picture__person' src={avatar}
          />
          <figcaption className='figcaption'>
            <ul className='information__person'>
              <li>{nodeDatum.first_name ? ` ${nodeDatum.first_name} ${nodeDatum.last_name}` : ''}</li>
              <li>{nodeDatum.place_of_birth ? `Née à: ${nodeDatum.place_of_birth}` : ''}</li>
              <li>{nodeDatum.date_of_birth ? `Anniversaire le: ${nodeDatum.date_of_birth}` : ''}</li>
            </ul>
          </figcaption>
        </figure>
      </foreignObject>
    </g>
    </>
  )
};

export default class CenteredTree extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }
  render() {
    const containerStyles = {
      width: '90%',
      height: '200%',
      right: '4%',
      position: 'absolute',
      bottom: '-100px',
    }
    const nodeSize = { x: 250, y: 250 }

    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          zoomable={false}
          nodeSize={nodeSize}
          pathFunc={'step'}
          data={orgChart}
          translate={this.state.translate}
          orientation={'vertical'}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
        />
        <button type="button" className="add-person-button"> <NavLink to="/tree/addperson" activeClassName="menu-button-onPage">+</NavLink>  </button>
=======
=======
import { number } from "prop-types";
>>>>>>> tree-v2
import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "",
    children: [
      {
        name: "1"
      },
      {
        name: "2"
      },
      {
        name: "3"
      },
      {
        name: "4"
      }

    ]
  }
];


// const debugData = [
//   {
//     name: "",
//     children: [
//       {
//         name: "1"
//       },
//       {
//         name: "2"
//       },

//     ]
//   }
// ];

const containerStyles = {
  width: '100%',
  height: '100vh',
}

const foreignObjectProps = { width: 200, height: 200, x: -100, y: -20 };
const renderForeignObjectNode = ({ nodeDatum, toggleNode, }) => {

  return (
    <g>
      <foreignObject {...foreignObjectProps} >
      <text fill="black" strokeWidth="1" >
      {nodeDatum.name ? `Nom: ${nodeDatum.name}` : ''}
    </text>
        <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png"
          height='200'
          width='200'
         />
      </foreignObject>
    </g>
  )
};

export default class CenteredTree extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    const nodeSize = { x: 400, y: 400 };

    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          zoomable={false}
          nodeSize={nodeSize}
          pathFunc={'step'}
          data={debugData}
          translate={this.state.translate}
          orientation={'vertical'}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
        />
>>>>>>> tree preparation
      </div>
    );
  }
}

// import React from "react";
// import Tree from "react-d3-tree";
// //import orgChartJson from "./data/org-chart.json";
// import { useCallback, useState } from "react";
// import "./styles.scss";

// const containerStyles = {
//   width: "100vw",
//   height: "100vh"
// };
// const renderForeignObjectNode = ({
//   nodeDatum,
//   toggleNode,
//   foreignObjectProps
// }) => (
//   <g>
//     <foreignObject {...foreignObjectProps}>
//       <div style={{ height:'40px',  border: "1px solid black", backgroundColor: "#dedede" }}>

//       </div>
//     </foreignObject>
//   </g>
// );

// export default function App() {
//   const [translate, containerRef] = useCenteredTree();
//   const nodeSize = { x: 200, y: 200 };
//   const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
//   return (
//     <div style={containerStyles} >
//       <Tree
//         data={debugData}
//         translate={translate}
//         nodeSize={nodeSize}
//         renderCustomNodeElement={(rd3tProps) =>
//           renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
//         }
//         orientation="vertical"
//       />
//     </div>
//   );
// }


// export const useCenteredTree = () => {
//   const [translate, setTranslate] = useState({ x: 0, y: 0 });
//   const containerRef = useCallback((containerElem) => {
//     if (containerElem !== null) {
//       const { width, height } = containerElem.getBoundingClientRect();
//       setTranslate({ x: width / 2, y: height / 2 });
//     }
//   }, []);
//   return [translate, containerRef];
// };
