const { createStore } = require('redux');

const counter = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}

const store = createStore(counter);

store.subscribe(() => {
    console.log('state', store.getState())
})

console.log(store.getState())

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })