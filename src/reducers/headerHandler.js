import { MENU_BURGER_CLICKED } from "../actions/actionTypes";

const initialState = {
  menuopen: false,
  iconhovered: false
};

const headerHandler = (state = initialState, action) => {
  switch (action.type) {
    case MENU_BURGER_CLICKED:
      return {
        ...state,
        menuopen: !state.menuopen
      };

    default:
      return state;
  }
};

export default headerHandler;
