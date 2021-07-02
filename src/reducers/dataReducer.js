
const iniData = {
    tasks: []
}

const dataReducer = (state = iniData, action) => {
    switch (action.type) {
        case 'ADD_TASK': return {
            ...state,
            tasks: [...state.tasks, action.payload]
        };
        case 'DELETE_ITEM': return {
            ...state,
            tasks: state.tasks.filter((item) => {
                return item !== action.payload
            })
        };
        case 'UPDATED_ITEM': return {
            ...state,
            tasks: state.tasks.map((item) => {
                if (item === action.payload.oldText) {
                    item = action.payload.newText;
                }
                return item;
            })
        };
        case 'CLEAR_ALL': return {
            ...state,
            tasks: []
        }
        default: {
            return state
        }
    }
}

export default dataReducer