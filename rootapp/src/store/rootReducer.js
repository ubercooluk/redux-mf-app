let initialState= {
    global: 0,
    local: 0,
    todo: 0
}
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT_COUNTER':            
            return {...state, global: state.global+1};
        case 'DECREMENT_COUNTER':
        return {...state, global: state.global-1};
        default:
            return state;
    }
    return state;
}