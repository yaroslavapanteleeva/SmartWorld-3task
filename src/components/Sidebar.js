import React from 'react'
import { Form } from './Form';
import { Notes } from './Notes';

export const Sidebar = () => {
    const notes = new Array(3).fill('').map((_,i) => ({id: i, title: `Note ${i + 1}`}))

    return (

            <div className="sidebar">
                <Notes notes={notes} />
                <Form />
              
            </div> 
       
       
    )
    
}