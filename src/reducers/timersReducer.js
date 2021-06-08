import { NEW_TIMER, TOGGLE_TIMER, UPDATE, REMOVE_TIMER} from '../actions';
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
            return [new Timer(name),...state]


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


            default:
                return state;
    }
}

export default timersReducer;