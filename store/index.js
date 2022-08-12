export const state = () => ({
    tasks: []
})
export const mutations = {
    ADD_TASK(state, tasks) {
        state.tasks = [{
            content: tasks,
            done: false
        }, ...state.tasks];
    },
    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done;
    }
}