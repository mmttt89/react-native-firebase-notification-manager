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
            const modified = state.messages.map((item, index) => {
                if (index == action.payload) {
                    item.unRead = false
                };
            })
            console.log(">>>>>>>>>>>>>>",modified);
            return Object.assign({}, state);
        }
        default: return state;
    }
}

export default messagesReducer;
