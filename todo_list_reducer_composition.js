const { createStore } = require('redux')

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }

        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {...state, completed: !state.completed};
        
        default:
            console.log('calling todo reducer')
            return state;
    }
}

const todos = (state = [], action) => {
    console.log('calling todos reducer')
    switch (action.type)  {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];

        case 'TOGGLE_TODO':
            return state.map((t) => todo(t, action))

        default:
            return state;
    }
};

const visibilityFilter = (
    state = 'SHOW_ALL', 
    action
) => {
    console.log('calling visibilityFilter reducer')
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        
        default:
            return state;
    }
};

const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    };
};

const store = createStore(todoApp);

console.log('Initial state:');
console.log(store.getState());
console.log('----------------------');

console.log('Dispatching ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('----------------------');