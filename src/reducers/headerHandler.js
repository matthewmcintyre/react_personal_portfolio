const initialState = {
  menuopen: false
};

const headerHandler = (state = initialState, action) => {
  switch (action.type) {
    case "MENUCLICKED":
      return {
        ...state,
        menuopen: true
      };

    default:
      return state;
  }
};

export default headerHandler;
