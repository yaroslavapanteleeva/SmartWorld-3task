import React, { Fragment } from 'react';
import {Link, NavLink}  from 'react-router-dom';
import { Content } from './Content';

export const Notes = ({notes, onRemove}) => {

   

        return (
            <div className="list-group">
                {notes.map(note => (
                
                    <NavLink
                       
                        className="list-group-item list-group-item-action"
                        key={note.id}
                        to={note.id}
                       
                    >
                        <strong>{note.title}</strong>
                      
                        
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(note.id)}>&times;</button>
                   
                    </NavLink>
  
                ))} 
            
            </div>
        )
    
  
   
       
   

    
}