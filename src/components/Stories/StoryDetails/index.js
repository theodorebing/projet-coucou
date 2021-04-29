import React, { useEffect, useState } from 'react';
import './styles.scss';
import '../styles.scss';
import { Link, useParams, useHistory } from 'react-router-dom';
import FamilyNameTitle from 'src/components/FamilyNameTitle';
import axios from 'src/api';
import baseurl from 'src/middlewares/baseurl';
import dayjs from 'dayjs';
import { AiOutlineDelete } from 'react-icons/ai';

// == Component
const StoryDetails = () => {
  const [story, setStory] = useState({});
  const { storyId } = useParams();
  const history = useHistory();
  const handleClick = () => {
    history.push('/stories');
  };
  const deleteStory = () => {
    axios.delete(`${baseurl}family/stories/${storyId}`);
    handleClick();
  };

  (useEffect(() => {
    axios.get(`${baseurl}family/stories/${storyId}`).then((result) => {
      if (result && result.data) {
        // setTimeout(() => {
        setStory(result.data);
        // }, 2000);
      }
    });
  }, []));
  const createdAt = dayjs(story.createdAt).format('DD/MM/YYYY');
  const startingDate = dayjs(story.startingDate).format('DD/MM/YYYY');
  const endingDate = dayjs(story.endingDate).format('DD/MM/YYYY');
  return (
    <div className="storyDetails-page">
      <FamilyNameTitle />
      <div className="storyDetails-box">
        {Object.keys(story).length ? (
          <>
            <h2 className="story-title">{story.title}</h2>
            <p className="story-box-text">{story.text}</p>
            <span className="storyDetails-createdAt storyDetails-date">Date d'ajout: {createdAt}</span>
            {/* {!story.updated_at &&
              (<span className="story-updatedAt storyDetails-date">{story.updated_at}</span>)}
            */}
            <span className="storyDetails-startingDate storyDetails-date">Date de début de l'histoire: {startingDate}</span>
            <span className="storyDetails-endingDate storyDetails-date">Date de fin de l'histoire: {endingDate}</span>
            <span className="storyDetails-location storyDetails-date">Lieu(x) où se déroule l'histoire:  {story.location}</span>
            <div className="storyDetails-div-buttons">
              {/* <button type="button" className="storyDetails-button">
                Modifier
              </button> */}
              <button className="storyDetails-delete-button" type="button" onClick={deleteStory}>
                <AiOutlineDelete size="2em" />
              </button>
            </div>
            <Link to="/stories">
              <button type="button" className="storyDetails-return-button"> Retour </button>
            </Link>

          </>
        ) : (
          <h2 className="story-title">Loading</h2>
        )}

      </div>

    </div>
  );
};

// == Export
export default StoryDetails;
