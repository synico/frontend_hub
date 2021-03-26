import produce, { setAutoFreeze } from 'immer'

setAutoFreeze(false)

const visibilityFilter = (state = 'SHOW_ALL', action) => 
  produce(state, (draft) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
)

export default visibilityFilter