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
      </div>
    );
  }
}
