const SET_ACCOUNT_INFO = 'steem-robo/home/SET_ACCOUNT_INFO'
const SET_ACCOUNT_GLOBAL_CONFIG = 'steem-robo/home/SET_ACCOUNT_GLOBAL_CONFIG'

const initialState = {
  account_info: null,
  account_global_config: null,
}

export default (state = initialState , action) => {
 switch (action.type) {
  case SET_ACCOUNT_INFO:
    return {
    ...state,
    account_info: action.payload,
    }
  case SET_ACCOUNT_GLOBAL_CONFIG:
    return {
    ...state,
    account_global_config: action.payload,
    }
  default:
   return state
 }
}

export function setAccountInfo(payload) {
  return {
    type: SET_ACCOUNT_INFO,
    payload: payload,
  }
}

export function setAccountGlobalConfig(payload) {
  console.log(payload)
  return {
    type: SET_ACCOUNT_GLOBAL_CONFIG,
    payload: payload,
  }
}

