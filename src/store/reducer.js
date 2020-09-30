
const initialState = {
    counter: 1
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'Age_Up':
            newState.counter++;
            break
        case 'Age_Down':
            newState.counter--;
            break
    }
    return newState;
}

export default reducer;