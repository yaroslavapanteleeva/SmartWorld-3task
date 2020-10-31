import React, {useState, useContext} from 'react';

export const Form = () => {
    const [value, setValue] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        if(value.trim()) {
            console.log('Создана')
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