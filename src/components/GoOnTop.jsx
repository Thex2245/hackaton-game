import React from 'react'
import './GoOnTop.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const GoOnTop = () => {
    const top = () => {
        window.scrollTo(0-20,0)
    }
    return (
    <div className='goTop'>
        <i className='bi bi-arrow-up-left arrow' onClick={top}></i>
    </div>
    )
}

export default GoOnTop