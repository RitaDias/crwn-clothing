const INITIAL_STATE = {
  currentUser: null
};

// state = INITIAL_STATE = set value default to INITIAL_STATE if state is /undefined/.
// If a null value is passed in the state it  won't default to INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
