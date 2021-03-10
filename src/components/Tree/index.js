import { number } from "prop-types";
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
