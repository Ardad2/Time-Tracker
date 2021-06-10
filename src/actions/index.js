export const NEW_TIMER = 'NEW_TIMER'
export const addTimer = (name, category) =>
{
    return {
        type: NEW_TIMER,
        payload: { name, category }
    }
}


export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const toggleTimer = (index) =>
{
    return {
        type: TOGGLE_TIMER,
        payload: { index }
    }
}

export const SELECT_TIMER = 'SELECT_TIMER'
export const selectTimer = (index) => {
    return {
        type: SELECT_TIMER,
        payload: {index }
    }
}

export const UPDATE = "UPDATE"

export const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime }
  }
}

export const REMOVE_TIMER = 'REMOVE_TIMER'
export const removeTimer = (index) =>
{
    return {
        type: REMOVE_TIMER,
        payload: { index }
    }
}

export const RESET_TIMER = 'RESET_TIMER'
export const resetTimer = (index) => 
{
    return {
        type: RESET_TIMER,
        payload: { index }
    }
}
