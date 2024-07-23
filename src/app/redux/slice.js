const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todolist :[]
}
const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const data = {
                id: nanoid(),
                task: action.payload
            }
            state.todolist.push(data);
            },
            removeTodo : (state,action) => {
                const data = state.todolist.filter((todo) => {
                    return todo.id !== action.payload
                })
                state.todolist = data;
            },
            editTodo : (state,action) => {
                const index = state.todolist.findIndex((todo) => todo.id === action.payload.id);
                if(index!==-1){
                    state.todolist[index] = action.payload;
                }
                
            }
        }
    }
)
export const {addTodo,removeTodo,editTodo} = todoSlice.actions;
export default todoSlice.reducer;