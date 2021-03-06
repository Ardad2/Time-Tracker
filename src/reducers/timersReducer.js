import { NEW_TIMER, TOGGLE_TIMER, UPDATE, REMOVE_TIMER, RESET_TIMER} from '../actions';
import Timer from '../Timer'

const timersReducer = (state = [], action) => {
    switch (action.type)
    {
        case UPDATE:
            return state.map((timer) => {
              if (timer.isRunning) {
                timer = { ...timer, time: timer.time += action.payload.deltaTime }
              }
              return timer
            })
        case NEW_TIMER:
            const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
            const category = action.payload.category ? action.payload.category : `Uncategorized`
            return [new Timer(name,category),...state]


        case TOGGLE_TIMER:
            const newState = state.map((timer,index) => {
                if (action.payload.index === index)
                {
                    return {...timer, isRunning: !timer.isRunning}
                }
                return timer
            })
            return newState 

            case REMOVE_TIMER:
                const newState1 = state.filter((timer,index) => action.payload.index !== index
                )
                return newState1;

            case RESET_TIMER:
                return state.map((timer,index) => {
                    if (action.payload.index === index) {
                      timer = { ...timer, time: timer.time = 0 }
                    }
                    return timer
                  })


            default:
                return state;
    }
}

export default timersReducer;