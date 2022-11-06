import { useDispatch, useSelector } from 'react-redux'
import { YouWin, GamePicked } from '../redux/store/slices/GameStateSlice'

export const ResultHandler = () => {

    const dispatch = useDispatch()
    const { userPicked, gamePicked } = useSelector((state) => state.game)

    const Result = () => {
        dispatch(GamePicked(Math.floor(Math.random() * 5).toString()))

        let i = 0
        let pick = userPicked + gamePicked
        let winCon = ["02", "03", "10", "15", "21", "24", "31", "32", "43", "40"]
        while (i < winCon.length) {
            if (pick === winCon[i]) {
                dispatch(YouWin(true))
                break;
            } else {
                dispatch(YouWin(false))
            }
            i++
        }
    }

    return { Result }
}
