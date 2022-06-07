import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../State';
import './Bank.css'

const BankTransaction = () => {
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney, bankruptMoney} = bindActionCreators(actionCreators, dispatch)
    const amount = useSelector((state: State) => state.BankReducer)
    return (
        <div className='bank-transaction'>
            <div className="container">
                <h2>{amount}</h2>
                <button onClick={()=> depositMoney(100)} className="deposit">Deposit</button>
                <button onClick={()=> withdrawMoney(50)} className="withdraw">Withdraw</button>
                <button onClick={()=> bankruptMoney()} className="bankrupt">Bankrupt</button>
            </div>
        </div>
    );
};

export default BankTransaction;