const initialState = {
  menuopen: false,
  iconhovered: false
};

const headerHandler = (state = initialState, action) => {
  switch (action.type) {
    case "MENUBURGERCLICKED":
      return {
        ...state,
        menuopen: !state.menuopen
      };

    default:
      return state;
  }
};

export default headerHandler;
