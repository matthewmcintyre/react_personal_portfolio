import { SHOW_ABOUT } from "../actions/actionTypes";

const initialState = {
  show: false
};

const displayAboutMe = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ABOUT:
      return {
        ...state,
        show: true
      };

    default:
      return state;
  }
};

export default displayAboutMe;
