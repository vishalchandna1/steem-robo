const SET_VOTING_WEIGHT = 'steem-robo/home/SET_VOTING_WEIGHT'

const initialState = {
  voting_weight: 0,
};

export default (state = initialState , action) => {
 switch (action.type) {
  case SET_VOTING_WEIGHT:
   return {
    ...state,
    voting_weight: action.payload,
   }
  default:
   return state
 }
}

export function setVotingWeight(payload) {
  return {
    type: SET_VOTING_WEIGHT,
    payload: payload,
  }
}
