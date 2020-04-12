export const FETCH_SUBSCRIPTION_BEGIN = 'FETCH_SUBSCRIPTION_BEGIN';
export const FETCH_SUBSCRIPTION_SUCCESS = 'FETCH_SUBSCRIPTION_SUCCESS';
export const FETCH_SUBSCRIPTION_FAILURE = 'FETCH_SUBSCRIPTION_FAILURE';
export const GROUP_BY_GRADE = 'GROUP_BY_GRADE';
export const GROUP_BY_MACQUARIE = 'GROUP_BY_MACQUARIE';
export const GROUP_BY_AP = 'GROUP_BY_AP';

const groupByGrade = () => ({
  type: GROUP_BY_GRADE,
});

const groupByMacquarie = () => ({
  type: GROUP_BY_MACQUARIE,
});

const groupByAP = () => ({
  type: GROUP_BY_AP,
});

const fetchSubscriptionBegin = subscriptionId => ({
  type: FETCH_SUBSCRIPTION_BEGIN,
  subscriptionId,
});

const fetchSubscriptionSuccess = payload => ({
  type: FETCH_SUBSCRIPTION_SUCCESS,
  payload,
});

const fetchSubscriptionFailure = error => ({
  type: FETCH_SUBSCRIPTION_FAILURE,
  payload: error,
});

function handleErrors(response) {
  if (!response.ok) { throw Error(JSON.stringify(response)); }
  return response;
}

function fetchSubscription(subscriptionEndpointUrl, options) {
  return dispatch => {
    dispatch(fetchSubscriptionBegin(subscriptionEndpointUrl, options));

    setTimeout(() => fetch(subscriptionEndpointUrl, options)
      .then(handleErrors).then(res => res.json()).then(json => {
        dispatch(fetchSubscriptionSuccess(json));
      })
      .catch(error => {
        dispatch(fetchSubscriptionFailure(`${error}`));
      }), 1000);
  };
}

export {
  groupByGrade,
  groupByMacquarie,
  groupByAP,
  fetchSubscription,
  fetchSubscriptionBegin,
  fetchSubscriptionSuccess,
  fetchSubscriptionFailure,
};
