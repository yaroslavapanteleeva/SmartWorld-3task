import React, {Fragment, useContext, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';

import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';
import { FirebaseContext } from '../context/farebase/firebaseContex';

const Todo = ({handleLogout}) => {
    const { notes, fetchNotes} = useContext(FirebaseContext)
    useEffect(() => {
        fetchNotes()
        
    }, [])
    
    return (
        
            <section className="hero">
            <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">ToDo LIST</a>
                    <button onClick={handleLogout} className="btn btn-outline-success my-2 my-sm-0">Logout</button>
                </nav> 
                <Sidebar />

                {/* {notes.map(note => (
                    <Switch>
                        <Route path={note.id}>
                            <Content titleNotes={note.title}/>
                        </Route>
                    </Switch>
                ))} */}

                
               
                
               
            </section>
       
        
    )
}

export default Todo;