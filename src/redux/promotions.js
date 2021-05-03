import * as ActionTypes from "./ActionTypes";

export const Promotions = (
  state = { isLoading: true, errMess: null, promotions: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOTIONS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
<<<<<<< HEAD

    case ActionTypes.PROMOTIONS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };

    case ActionTypes.PROMOTIONS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

=======
    case ActionTypes.PROMOTIONS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };
    case ActionTypes.PROMOTIONS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
>>>>>>> 61d0f039577f0f4ea7a9f6b99182332608d2766a
    default:
      return state;
  }
};
