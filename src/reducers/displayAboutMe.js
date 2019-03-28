const initialState = {
  show: false
};

const displayAboutMe = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWABOUT":
      return {
        ...state,
        show: true
      };

    default:
      return state;
  }
};

export default displayAboutMe;
