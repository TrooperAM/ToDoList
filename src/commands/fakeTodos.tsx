export const todoList = [
    {
        id: 1,
        info: "Wash the dishes",
        complete: false,
    },
    {
        id: 2,
        info: "Shopping",
        complete: false,
    },
    {
        id: 3,
        info: "do the homework",
        complete: false,
    },
    {
        id: 4,
        info: "Visit dentist",
        complete: false,
    },
    {
        id: 5,
        info: "Read documentation",
        complete: false,
    },
    {
        id: 6,
        info: "Sleep",
        complete: false,
    },
]
export const fakeTodos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({todos: todoList})
        }, 1000)
    })
}