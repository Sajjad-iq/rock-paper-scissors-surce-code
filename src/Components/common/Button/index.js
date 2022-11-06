import React from 'react'
import './index.css'
import { Link } from "react-router-dom";


export const BUTTON = React.memo((props) => {
    return (
        <Link to={props.to} onClick={props.onClick} className={`button-component ${props.outlineColor}`}><img src={props.buttonImgLabel} className='button-label-img' /></Link>
    )
})
