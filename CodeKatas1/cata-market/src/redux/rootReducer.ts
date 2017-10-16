import { combineReducers } from 'redux';
import PriceCmpntReducer from './priceCmpntReducer';

const rootReduser = combineReducers({
    priceCmpnt: PriceCmpntReducer
});

export default rootReduser;
