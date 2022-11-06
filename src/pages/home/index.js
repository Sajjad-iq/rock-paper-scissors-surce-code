import { GAME_WRAPPER } from "./GameWrapper"
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react'
import { ScoreCount } from "../../redux/store/slices/GameStateSlice";

export const Home = () => {
    const { youWin } = useSelector((state) => state.game)
    const dispatch = useDispatch()
    function Check() {
        return youWin === true ? dispatch(ScoreCount()) : ""
    }
    useEffect(() => {
        Check()
    }, [])


    return (
        <section className="home-page">
            <GAME_WRAPPER />
        </section>
    )
}
