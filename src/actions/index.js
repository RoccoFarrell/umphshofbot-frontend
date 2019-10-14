import {tweetsRef} from '../firebase'
const FETCH_TWEETS = 'FETCH_TWEETS';

export const addTweet = newTweet => async dispatch => {
  tweetsRef.push().set(newTweet);
};
export const completeTweet = completeTweet => async dispatch => {
  tweetsRef.child(completeTweet).remove();
};
export const fetchTweets = () => async dispatch => {
  tweetsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TWEETS,
      payload: snapshot.val()
    });
  });
};