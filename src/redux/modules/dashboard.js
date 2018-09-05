const SET_VOTING_WEIGHT = 'steem-robo/home/SET_VOTING_WEIGHT'
const SET_SLIDER_LOADING = 'steem-robo/home/SET_SLIDER_LOADING'

const initialState = {
  voting_weight: 50,
  slider_loading: false,
};

export default (state = initialState , action) => {
 switch (action.type) {
  case SET_VOTING_WEIGHT:
    return {
    ...state,
    voting_weight: action.payload,
    }
  case SET_SLIDER_LOADING:
    return {
    ...state,
    slider_loading: action.payload,
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

export function setSliderLoading(payload) {
  return {
    type: SET_SLIDER_LOADING,
    payload: payload,
  }
}

