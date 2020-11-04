import React, {useState, useContext} from 'react';
import { FirebaseContext } from '../context/farebase/firebaseContex'

export const Form = () => {
    const [value, setValue] = useState('')
    const firebase = useContext(FirebaseContext)


    const submitHandler = e => {
        e.preventDefault()
        if(value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                console.log('создана')
            }).catch(() => {
                console.log('Что-то не так', 'danger')  
            })
            setValue('')
        } else {
            console.log('нет')
        }
    }
    return (
        <form className="form" onSubmit={submitHandler}>
            <input 
                type="text"
                className="form-control"
                placeholder="Поле ввода назначения"
                value={value}
                onChange= {e => {setValue(e.target.value)}}
            />
            <button type="submit" className="btn btn-primary">Добавить список</button>
        </form>
    )
    
}