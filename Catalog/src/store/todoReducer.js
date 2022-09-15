import { createAction, createReducer } from "@reduxjs/toolkit";
const initialState = [];
export const todoReducer = createReducer(initialState, (builder) => {
    builder.addCase(createAction('ADD_TODO'), (state, action) => {
        return [...state, {id: state.length+1, description: action.payload}];
    }).addCase(createAction('REMOVE_TODO'), (state, action) => {
        var todoId = action.payload;
        var index = state.findIndex(todo => todo.id === todoId);
        if(index === undefined || index === null || index < 0)
        return state;
        return [
            ...state.slice(0,index),
            ...state.slice(index+1)
        ]

    }).addDefaultCase((state, action) => {})
});