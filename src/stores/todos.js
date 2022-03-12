import {writable} from 'svelte/store'

export const todos = writable([])

// export function to addTodo
export function addTodo(todo) {
    todos.update((todos) => [...todos, {todo, completed: false, id: Date.now()}])
}

// export const function deleteTodo
export function deleteTodo(id) {
    todos.update(todos => todos.filter(todo => todo.id !== id))
}

// export function toggleTodoCompleted
export function toggleTodoCompleted(id) {
    todos.update(todos => todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
}