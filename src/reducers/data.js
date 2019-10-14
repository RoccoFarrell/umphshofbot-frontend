export const FETCH_TWEETS = 'FETCH_TWEETS'
export default (state = {'tweets':[]}, action) => {
  console.log('action received', action)
  switch(action.type) {
    case FETCH_TWEETS:
      return Object.assign({}, state, {
        tweets: [
          ...state.tweets,
          {
            fromUserHandle: action.payload.user.screen_name,
            fromUserName: action.payload.user.name,
            text: action.payload.text
          }
        ]
      })
    default:
      return state;
  }
};