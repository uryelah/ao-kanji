import {
  FETCH_SUBSCRIPTION_BEGIN,
  FETCH_SUBSCRIPTION_SUCCESS,
  FETCH_SUBSCRIPTION_FAILURE,
} from './../actions/subscription';

const initialState = {
  loading: false,
  error: null,
  subscription: null,
};

export const subscriptionsReducer = (state=initialState, action) => {

  switch(action.type) {

  case FETCH_SUBSCRIPTION_BEGIN:
    console.log("Data Load Started");
    return {
      ...state,
      loading: true,
      subscription: null,
    }

  case FETCH_SUBSCRIPTION_SUCCESS:
    console.log(`Data Loaded: ${JSON.stringify(action.payload)}`);
    return {
      ...state,
      subscription: action.payload,
      loading: false,
    }

  case FETCH_SUBSCRIPTION_FAILURE:
    console.log(`Data Load Error: ${action.payload}`);
    return {
      ...state,
      error: action.payload,
      loading: false,
    }

  default:
    return state
  }
}