export const FETCH_TWEETS = 'FETCH_TWEETS'
export default (state = {'tweets':[]}, action) => {
  console.log('action received', action)
  switch(action.type) {
    case FETCH_TWEETS:
      console.log(action)
      return Object.assign({}, state, {
        tweets: [
          ...state.tweets,
          {
            fromUserHandle: action.payload.user.screen_name,
            fromUserName: action.payload.user.name,
            text: action.payload.text,
            date: action.payload.created_at
          }
        ]
      })
    default:
      return state;
  }
};