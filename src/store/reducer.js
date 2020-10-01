
const initialState = {
    counter: 21
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'Age_Up':
            newState.counter+=action.val;
            break
        case 'Age_Down':
            newState.counter-=action.val;
            break
    }
    return newState;
}

export default reducer;