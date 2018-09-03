const PUSH_MESSAGE = 'steem-robo/home/PUSH_MESSAGE';
const REMOVE_MESSAGE = 'steem-robo/home/PUSH_MESSAGE';

const initialState = {
  messages: [],
};

export default (state = initialState , action) => {
 switch (action.type) {
  case PUSH_MESSAGE:
   return {
    ...state,
    message: [...state.messages, action.payload]
   }
  case REMOVE_MESSAGE:
    const messages = state.messages;
    messages.splice(messages.findIndex(item => item.id === action.payload), 1)
    return {
      ...state,
    }
  default:
   return state
 }
}

export function pushMessage(payload) {
  return {
    type: PUSH_MESSAGE,
    payload: payload,
  }
}

export function removeMessage(payload) {
  return {
    type: REMOVE_MESSAGE,
    payload: payload,
  }
}


