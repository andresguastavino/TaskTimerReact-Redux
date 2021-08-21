const ADD_TASK = 'ADD_TASK';

export function addTask(task) {
    return {
        task,
        type: ADD_TASK
    }
}