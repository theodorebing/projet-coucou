import {
  ON_HELP_PAGES,
  NO_HELP_BUTTONS,
} from 'src/actions/general';

const initialState = {
  showHelpButtons: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_HELP_PAGES:
      return {
        ...state,
        showHelpButtons: true,
      };
    case NO_HELP_BUTTONS:
      return {
        ...state,
        showHelpButtons: false,
      };

    default:
      return state;
  }
};
