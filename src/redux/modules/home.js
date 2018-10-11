const INIT_STEEM_CONNECT = 'steem-robo/home/INIT_STEEM_CONNECT'
const SET_ACCESS_TOKEN = 'steem-robo/home/SET_ACCESS_TOKEN'

const initialState = {
  sc2: null,
};

export default (state = initialState , action) => {
 switch (action.type) {
  case INIT_STEEM_CONNECT:
   return {
    ...state,
    sc2: action.payload,
   }
  case SET_ACCESS_TOKEN:
    state.sc2.setAccessToken([action.payload])
    return {
    ...state,
    }
  default:
   return state
 }
}

export function initSteemConnect(payload) {
  return {
    type: INIT_STEEM_CONNECT,
    payload: payload,
  }
}

// Will be replaced with return {types: [REQUEST, SUCCESS, FAILURE], promise: (axios) => axios.post(url, {data: payload})}
export function setAccessToken(payload) {
  return {
    type: SET_ACCESS_TOKEN,
    payload: payload,
  }
}

