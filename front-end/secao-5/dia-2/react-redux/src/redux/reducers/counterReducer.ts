import { AnyAction } from "redux";

// type ActionType = {
//   type: string;
// };

const INITIAL_STATE = {
  clicks: 0,
  count: 0,
};

function counterReducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
}

export default counterReducer;
