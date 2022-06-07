import { ActionType } from "../Action-Types";
import { Action } from "../Actions";

const initialState = 0;

const BankReducer = ((state: number =initialState, action: Action) => {
    switch(action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case  ActionType.WITHDRAW: 
            return state - action.payload;
        case  ActionType.BANKRUPT:
            return 0;
        default:
            return state;
    }
})

export default BankReducer;
