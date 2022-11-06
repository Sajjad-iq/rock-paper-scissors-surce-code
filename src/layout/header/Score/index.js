import React from 'react'
import { useSelector } from 'react-redux'


export const SCORE = () => {
    const { Score } = useSelector((state) => state.game)

    return (
        <section className='score-component'>
            <p className='score'>SCORE</p>
            <p className='score-counter'>{Score}</p>
        </section>
    )
}
