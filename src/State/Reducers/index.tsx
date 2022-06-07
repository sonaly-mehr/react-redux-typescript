import { combineReducers } from "redux";
import BankReducer from "./Bank";


const reducers = combineReducers({
    BankReducer: BankReducer
})

export default reducers;
export type State = ReturnType<typeof reducers>