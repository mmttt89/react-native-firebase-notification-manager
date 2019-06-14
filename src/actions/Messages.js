import * as types from '@Constants/Action-Types';

const action = (type, payload) => ({ type: type, payload: payload });

export const putMessageIntoInbox = (notifocation) => async (dispatch) => {
    dispatch(action(types.MESSAGE.RECIEVED, notifocation));
};

export const messageReaded = (index) => async (dispatch) => {    
    dispatch(action(types.MESSAGE.READED, index));
};