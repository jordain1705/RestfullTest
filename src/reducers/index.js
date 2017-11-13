import {combineReducers} from 'redux';
import gamesReducer from './games';
import gamesReducer2 from './games_reducer';


//colects the Reducers and combine's them into one object called allReducers
const allReducers = combineReducers({
      games: gamesReducer,
      games2:gamesReducer2
     });

export default allReducers;
