import { createStore } from 'redux'
import scheduleReducer from './schedule.reducer'

const store = createstore(scheduleReducer)

export default store