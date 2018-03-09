const initialState = {
    result: '',
    num1: '',
    num2: '',
    actionBtnHasPressed: false,
    history: null
};


const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        if (action.value) {
            if(state.actionBtnHasPressed) {
                return {
                    ...state,
                    num2: state.num2 += action.value,
                    result: state.num2
                }
            } else {
                return {
                    ...state,
                    num1: state.num1 += action.value,
                    result: state.num1
                }
            }
        }
    } else if (action.type === 'PLUS' || action.type === 'MINUS' || action.type === 'MULTIPLY'
        || action.type === 'DIVIDE') {
        return {
            ...state,
            actionBtnHasPressed: true,
            history: action.symbol
        }
    } else if (action.type === 'EVAL') {
        if (state.num1 && state.num2) {
            let result = eval(state.num1 + state.history + state.num2);
            return {
                ...state,
                result: result,
                num1: result,
                num2: ''
            }
        }
    }
    return state;
};

export default reducer;