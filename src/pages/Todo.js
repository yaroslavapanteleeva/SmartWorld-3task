import React from 'react';
import { Sidebar } from '../components/Sidebar';

const Todo = ({handleLogout}) => {
    return (
        <section className="hero">
           <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">ToDo LIST</a>
                <button onClick={handleLogout} className="btn btn-outline-success my-2 my-sm-0">Logout</button>
            </nav> 
            <Sidebar />
        </section>
        
        
    )
}

export default Todo;