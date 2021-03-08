import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "1",
    children: [
      {
        name: "2"
      },
      {
        name: "2"
      },
      {
        name: "2"
      },
      {
        name: "2"
      }
    ]
  }
];

const containerStyles = {
  width: '100%',
  height: '100vh',
}
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <rect width="50" height="50" x="-25" onClick={toggleNode} />
      {nodeDatum.name}
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

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
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          pathFunc={'step'}
          data={debugData} 
          translate={this.state.translate} 
          orientation={'vertical'}
          renderCustomNodeElement={renderRectSvgNode}
        />
      </div>
    );
  }
}
