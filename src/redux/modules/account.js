const SET_ACCOUNT_INFO = 'steem-robo/home/SET_ACCOUNT_INFO'

const initialState = {
  account_info: null,
}

export default (state = initialState , action) => {
 switch (action.type) {
  case SET_ACCOUNT_INFO:
  console.log(action)
   return {
    ...state,
    account_info: action.payload,
   }
  default:
   return state
 }
}

export function setAccountInfo(payload) {
  console.log(payload)
  return {
    type: SET_ACCOUNT_INFO,
    payload: payload,
  }
}
