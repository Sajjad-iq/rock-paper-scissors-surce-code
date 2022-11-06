import { WINNER_PICKED } from '../../Components/common/WinnerPicked'
import { YOU_WIN } from './YouWin'
import { GamePickedHandler } from '../../services/GamePickedHandler'
import { useEffect, useState } from 'react'
import { ResultHandler } from '../../services/ResultHandler';
import { useSelector } from 'react-redux';


export const WINNER_SCREEN = () => {
    const { youWin, gamePicked } = useSelector((state) => state.game)
    const { userPick, GamePick } = GamePickedHandler()
    const [isComponentRender, setComponentRender] = useState(true);
    const { Result } = ResultHandler()



    useEffect(() => {
        setComponentRender(false);
        Result()
    }, [gamePicked, isComponentRender])

    return (
        <section className='winner-screen-component '>
            <WINNER_PICKED Player="YOU PICKED" outLineAndImg={userPick()} />
            <YOU_WIN />
            <WINNER_PICKED Player="GAME PICKED" outLineAndImg={GamePick()} />
        </section>
    )
}
