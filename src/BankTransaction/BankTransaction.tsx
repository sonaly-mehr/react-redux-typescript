import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../State';
import './Bank.css'

const BankTransaction = () => {
    const [deposit, setDeposit] = useState<number>(0);
    const [withdraw, setWidthdraw] = useState<number>(0);

    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney, bankruptMoney} = bindActionCreators(actionCreators, dispatch)
    const amount = useSelector((state: State) => state.BankReducer)
    return (
        <div className='bank-transaction'>
            <div className="container">
                <h2>{amount}</h2>
                <input type="number" placeholder='Enter amount to deposit' value={deposit} onChange={(event: ChangeEvent<HTMLInputElement>)=> setDeposit(Number(event.target.value))}/>
                <button onClick={()=> depositMoney(deposit)} className="deposit">Deposit</button> <br />
                <input type="number" placeholder='Enter amount to withdraw'value={withdraw} onChange={(event: ChangeEvent<HTMLInputElement>)=> setWidthdraw(Number(event.target.value))}/>
                <button onClick={()=> withdrawMoney(withdraw)} className="withdraw">Withdraw</button> <br />
                <button onClick={()=> bankruptMoney()} className="bankrupt">Bankrupt</button>
            </div>
        </div>
    );
};

export default BankTransaction;