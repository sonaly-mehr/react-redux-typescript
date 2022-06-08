import React from 'react';
import './Home.css'

import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="bank">
                            <Link to="/bank">
                                <h2>Bank Transaction</h2>
                                <p>Here react redux typescript were used to create a simple deposit widthdraw bankrupt transaction</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="todo">
                            <Link to="/todolist">
                                <h2>To Do List</h2>
                                <p>Here react & typescript were used to create a simple To Do App</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="shopping">
                            <Link to="/shopping">
                                <h2>Shopping Cart</h2>
                                <p>Here react typescript & Material Ui were used to create a simple shopping cart</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;