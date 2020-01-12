import { createStore} from 'redux'
import matchReducer from './Reducers/matchReducer'

const store = createStore(matchReducer)

export default store