import React from 'react';

export const Store = React.createContext();

const initialState = {
    posts: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {
                posts: [...state.posts, ...action.payload]
            };
        case 'ADD_COMMENT':
            return {
                posts: action.payload.posts
            };
        case 'REMOVE_COMMENT':
            return {
                posts: action.payload.posts
            };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}