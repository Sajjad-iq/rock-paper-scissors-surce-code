import React from 'react'
import './index.css'


export const WINNER_PICKED = React.memo(({ Player, outLineAndImg }) => {
    return (
        <section className='winner-picked-component'>
            <section className={`picked-img ${outLineAndImg}`}></section>
            <p className='you-picked'>{Player}</p>
        </section>
    )
})
