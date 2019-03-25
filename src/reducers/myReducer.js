const initialState = {
  message: "It's Working!"
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOSOMETHING":
      return {
        ...state,
        message: "And it does one thing!"
      };

    default:
      return state;
  }
};

export default myReducer;
