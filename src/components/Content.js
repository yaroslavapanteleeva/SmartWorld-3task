import React, { useContext } from 'react';
import { FirebaseContext } from '../context/farebase/firebaseContex';
import { Form } from './Form';
import { Notes } from './Notes';




export const Content = ({titleNotes}) => {
    return (
        <div className="content">
                   
            <h1>{titleNotes}</h1>
            <Form />
             
        </div>  
    )
}
    
   
        
            
            
