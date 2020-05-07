import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initialState = {
    general: [
        {from: 'desi', msg: 'hello'}, 
        {from: 'jc', msg: 'bye'}, 
        {from: 'hunter', msg: 'hello1'}, 
        {from: 'desi', msg: 'bye1'}, 
    ],
    topic2: [
        {from: 'jc', msg: 'bye'}, 
        {from: 'desi', msg: 'bye1'}, 
        {from: 'hunter', msg: 'hello1'}, 
        {from: 'desi', msg: 'hello'}, 
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;

    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }
        default:
            return state
    }
}



let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}

function Store(props) {
    
    const [allChats, dispatch] = React.useReducer(reducer, initialState);

    if(!socket) {
        socket = io('3001')
        socket.on('chat message', function(msg){
            dispatch({type: "RECEIVE_MESSAGE", paylod: msg});
        });
    }

    const user = 'desi' + Math.random(100).toFixed(2);

    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    );
}

export default Store;