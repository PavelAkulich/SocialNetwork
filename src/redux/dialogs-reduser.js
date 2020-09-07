const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

let initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "Hey" },
        { id: 4, message: "Hello" },
    ],
    dialogsData: [
        { id: 1, name: "Pasha" },
        { id: 2, name: "Ilya" },
        { id: 3, name: "Lesha" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Kirill" },
    ],
    newMessageBody: ''
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody : action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messagesData: [...state.messagesData, { id: 9, message: body }]                
            };
        default:
            return state;
    }
}

export default dialogsReduser;