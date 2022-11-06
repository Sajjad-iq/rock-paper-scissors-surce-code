import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


export const YOU_WIN = React.memo(() => {
    const { youWin } = useSelector((state) => state.game)

    return (
        <section className='you-win-component'>
            <h1 className='you-win-header'>{youWin === true ? "YOU WIN" : "YOU LOSE"}</h1>
            <Link to="/Home" className='play-again-button'>PLAY AGAIN</Link>
        </section>
    )
})
