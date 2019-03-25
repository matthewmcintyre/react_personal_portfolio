const initialState = {
  scrolled: false
};

const displaySummary = (state = initialState, action) => {
  switch (action.type) {
    case "SCROLLHAPPENED":
      return {
        ...state,
        scrolled: true
      };

    default:
      return state;
  }
};

export default displaySummary;
