import React, {Fragment, useContext, useEffect} from 'react'

import { Form } from './Form';
import { Notes } from './Notes';
import { FirebaseContext } from '../context/farebase/firebaseContex';
import { Loader } from './Loader';


export const Sidebar = () => {
    const { loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        
    }, [])


    return (
       
            <div className="sidebar">
                <Notes notes={notes} onRemove={removeNote} />
                
                <Form />
                        
            </div>
    )
    
}