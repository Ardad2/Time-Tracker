import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTimer } from '../actions'

import './NewTimer.css'

export default function NewTimer() {


    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    const dispatch = useDispatch();

    return (
        <div className="NewTimer">
            <input 
            type='text'
            placeholder="What are you doing right now?"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
             <input 
            type='text'
            placeholder="Add a category or choose an existing one"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />

        <button onClick={() => dispatch(addTimer(name, category))}>+</button>
        </div>
    )
}