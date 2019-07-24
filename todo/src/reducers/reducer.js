export const initialState = {
    tasks: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
    ]
}


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                tasks: [...state.tasks, newTodo]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (action.payload === task.id) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    }
                    return task;
                })
            };
        case 'COMPLETED':
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.compleded)
            }
            default:
                return state;
    }
    
}