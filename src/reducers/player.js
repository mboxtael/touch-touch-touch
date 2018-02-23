const initialState = {
  accessToken: null,
  userID: null,
  friendsScores: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_PLAYER':
      console.log(action.player)
      return { ...state, ...action.player };
      break;
    default:
      return state;
  }
}
