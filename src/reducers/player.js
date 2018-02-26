const initialState = {
  accessToken: null,
  friendsScores: [],
  fbData: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_PLAYER':
      return { ...state, ...action.player };
      break;
    default:
      return state;
  }
}
