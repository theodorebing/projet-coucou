/* eslint-disable import/prefer-default-export */

export const findStoryById = (stories, id) => (
  stories.find((story) => story.id === id)
);
