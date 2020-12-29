const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH":
      state.data = [];
      return {
        ...state,
        data: state.data.concat(action.value),
      };
  }
  return state;
};
export default reducer;
