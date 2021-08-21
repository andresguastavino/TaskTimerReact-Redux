export const initialState = {tasks: []};

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state, 
                tasks: state.tasks.concat(action.task)
            }
        default: 
            return state;
    }
}