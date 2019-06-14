import * as actiontype from '@Constants/Action-Types';

const initState = {
    messages: []
};

const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case actiontype.MESSAGE.RECIEVED: {
            return Object.assign({}, state, { messages: [...state.messages, action.payload] });
        }
        case actiontype.MESSAGE.READED: {
            const modified = state.messages.map((item, index) => (index == action.payload) ?
                Object.assign({ ...item, unRead: false }) :
                item
            )
            return Object.assign({}, state, { messages: modified });
        }
        default: return state;
    }
}

export default messagesReducer;
