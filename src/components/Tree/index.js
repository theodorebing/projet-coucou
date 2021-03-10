
import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: {
      name: "1",
      place_of_birth: 'Tourcoin',
    person_UUID: '1477788895',
    date_of_birth: '18/02/2021',
    photo: 'url...',
    last_name: 'coucou',
    first_name: 'coucou',
    last_known_location: 'Tourcoin'
    },
    
    children: [
      {
        name: "1",
        place_of_birth: 'Tourcoin',
      person_UUID: '1477788895',
      date_of_birth: '18/02/2021',
      photo: 'url...',
      last_name: 'coucou',
      first_name: 'coucou',
      last_known_location: 'Tourcoin'
      },
      {
        name: "2",
        place_of_birth: 'Tourcoin',
        person_UUID: '1477788895',
        date_of_birth: '18/02/2021',
        photo: 'url...',
        last_name: 'coucou',
        first_name: 'coucou',
        last_known_location: 'Tourcoin'
      },
      {
        name: "3",
        place_of_birth: 'Tourcoin',
        person_UUID: '1477788895',
        date_of_birth: '18/02/2021',
        photo: 'url...',
        last_name: 'coucou',
        first_name: 'coucou',
        last_known_location: 'Tourcoin'
      },
      {
        name: "4", place_of_birth: 'Tourcoin',
        person_UUID: '1477788895',
        date_of_birth: '18/02/2021',
        photo: 'url...',
        last_name: 'coucou',
        first_name: 'coucou',
        last_known_location: 'Tourcoin'
      }

    ],
    
  }
];

const containerStyles = {
  width: '100%',
  height: '100vh',
}
const foreignObjectProps = { width: 250, height: 250, x: -100, y: -20 };
const renderForeignObjectNode = ({ nodeDatum, toggleNode, }) => {

  return (
    <g>
      <foreignObject {...foreignObjectProps} >    
       <ul className='information__person'>
         <li>{nodeDatum.last_name ? `Nom: ${nodeDatum.last_name}` : ''}</li>
         <li>{nodeDatum.first_name ? `Prénom: ${nodeDatum.first_name}` : ''}</li>
         <li>{nodeDatum.date_of_birth ? `Anniversaire: ${nodeDatum.date_of_birth}` : ''}</li>
         <li>{nodeDatum.last_known_location ? `Habite à: ${nodeDatum.last_known_location}` : ''}</li>
       </ul>
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
