import {
  FETCH_SUBSCRIPTION_BEGIN,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
  GROUP_BY_GRADE,
  GROUP_BY_MACQUARIE,
  GROUP_BY_AP,
} from '../actions/subscription';

const initialState = {
  groupBy: [1,2,3,4,5,6],
  loading: false,
  error: null,
  subscription: null,
};

const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GROUP_BY_GRADE:
      return {
        ...state,
        groupBy: [1, 2, 3, 4, 5, 6],
      };

    case GROUP_BY_MACQUARIE:
      return {
        ...state,
        groupBy: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      };

    case GROUP_BY_AP:
      return {
        ...state,
        groupBy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      };

    case FETCH_SUBSCRIPTION_BEGIN:
      return {
        ...state,
        loading: true,
        subscription: null,
      };

    case FETCH_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        subscription: action.payload,
        loading: false,
      };

    case FETCH_SUBSCRIPTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default subscriptionsReducer;
