import React from 'react';
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { NavLink, useHistory  } from 'react-router-dom';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl';
import avatarWoman from 'src/assets/images/avatar-woman.png';
import avatarMan from 'src/assets/images/avatar-man.png';
import dayjs from 'dayjs'


const FamilyNode = ({ node, style }) => {
  const formatDate = dayjs(node.dateOfBirth).format('DD/MM/YYYY');
  const history = useHistory();
  const deletePersonTree = (() =>{
    axios.delete(`${baseurl}tree/${node.id}`)
    .then((result) => {
      if (result.status === 200) {
        history.location.pathname  === '/' ? history.push('/tree') : history.push('/') 
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
  })
  return (
    <div style={style} className="person__tree">
      {node.gender === 2 ? (
        <>
          <figure className='figure'>
            <img
              className="person__tree__picture"
              src={avatarMan}
              alt="profil"
            />
            <figcaption className='figcaption'>
              <ul className='information__person'>
                <li>{node.firstName ? ` ${node.firstName} ${node.lastName}` : ''}</li>
                <li>{node.placeOfBirth ? `Née a: ${node.placeOfBirth} ` : ''}</li>
                <li>{node.dateOfBirth ? `Le: ${formatDate} ` : ''}</li>
                <li>{node.lastKnownLocation ? `Dernier lieu de vie: ${node.lastKnownLocation} ` : ''}</li>
                <li>{node.dateOfDeath ? `Décédé le: ${formatDate} ` : ''}</li>
              </ul>
              <NavLink to="/tree/editpersontree"><button className='edit__person__button' type="button"><AiFillEdit size='2em' /></button></NavLink>
              <button className='delete__person__button' type="button" onClick={deletePersonTree}><AiOutlineDelete size='2em' /></button>
            </figcaption>
          </figure>
        </>
      ) : (
        <figure className='figure'>
          <img
            className="person__tree__picture"
            src={avatarWoman}
            alt="profil"
          />
          <figcaption className='figcaption'>
            <ul className='information__person'>
              <li>{node.firstName ? ` ${node.firstName} ${node.lastName}` : ''}</li>
              <li>{node.placeOfBirth ? `Née a: ${node.placeOfBirth} ` : ''}</li>
              <li>{node.dateOfBirth ? `Le: ${formatDate} ` : ''}</li>
              <li>{node.lastKnownLocation ? `Dernier lieu de vie: ${node.lastKnownLocation} ` : ''}</li>
              <li>{node.dateOfDeath ? `Décédé le: ${formatDate} ` : ''}</li>
            </ul>
            <NavLink to="/tree/editpersontree"><button className='edit__person__button' type="button"><AiFillEdit size='2em' /></button></NavLink>
            <button className='delete__person__button' type="button" onClick={deletePersonTree}><AiOutlineDelete size='2em' /></button>
          </figcaption>
        </figure>
      )}
      <div className="person__tree__name">
        {node.firstName} {node.lastName}
      </div>
    </div>
  );
};

export default FamilyNode;
