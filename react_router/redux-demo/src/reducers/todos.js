import produce, { setAutoFreeze } from 'immer'

setAutoFreeze(false)

const todos = (state = [], action) => 
  produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.push({
          id: action.id,
          text: action.text,
          completed: false
        })
        break
      case 'TOGGLE_TODO':
        draft.map(todo => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed
          }
          return todo
        })
        break
      default:
        return draft
    }
  }
)

export default todos