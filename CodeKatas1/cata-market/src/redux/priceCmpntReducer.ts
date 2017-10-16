import * as _   from 'lodash';
import initialState from './initialState';

export default function PriceCmpntReducer(state = initialState.site, action){
    switch(action.type){        
        case 'ANMOUNT':{    
           // debugger;
            return Object.assign({}, state, {amountCmpnt: action.quantityPurchased});
        } 

        default: return state;
    }   
}