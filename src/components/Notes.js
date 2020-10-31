import React from 'react';


export const Notes = ({notes}) => {

   
    
    const clickNotes = e => {
        e.preventDefault()
        
        
    }

    return (
        <ul className="list-group">
            {notes.map(note => (
            
                    <li 
                        className="list-group-item note"
                        key={note.id}
                        onClick={clickNotes}
                        
                    >
                
                        <strong>{note.title}</strong>
                        <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                    </li>
                    
                
            ))} 
        </ul>
    )

    
}