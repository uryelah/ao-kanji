export const FETCH_SUBSCRIPTION_BEGIN = "FETCH_SUBSCRIPTION_BEGIN";
export const FETCH_SUBSCRIPTION_SUCCESS = "FETCH_SUBSCRIPTION_SUCCESS";
export const FETCH_SUBSCRIPTION_FAILURE = "FETCH_SUBSCRIPTION_FAILURE";

export function fetchSubscription(subscriptionEndpointUrl, options) {
  return dispatch => {

    dispatch(fetchSubscriptionBegin(subscriptionEndpointUrl, options));

    setTimeout(() => {

      return fetch(subscriptionEndpointUrl, options).then(handleErrors).then(res => res.json()).then(json => {
        dispatch(fetchSubscriptionSuccess(json));
      }).catch(error => {
        dispatch(fetchSubscriptionFailure(`${error}`));
      });

    }, 1000);

  }
}

export const fetchSubscriptionBegin = (subscriptionId) => ({
  type: FETCH_SUBSCRIPTION_BEGIN,
  subscriptionId: subscriptionId,
});

export const fetchSubscriptionSuccess = payload => ({
  type: FETCH_SUBSCRIPTION_SUCCESS,
  payload: payload,
});

export const fetchSubscriptionFailure = (error) => ({
  type: FETCH_SUBSCRIPTION_FAILURE,
  payload: error,
});

function handleErrors(response) {
  if (!response.ok) { throw Error(JSON.stringify(response)) }
  return response;
}