import { BUTTON } from "../../../Components/common/Button"
import SpockImg from '../../../assets/icons/icon-spock.svg'
import PaperImg from '../../../assets/icons/icon-paper.svg'
import LizardImg from '../../../assets/icons/icon-lizard.svg'
import ScissorsImg from '../../../assets/icons/icon-scissors.svg'
import RockImg from '../../../assets/icons/icon-rock.svg'
import { useDispatch } from 'react-redux'
import { userPicked } from "../../../redux/store/slices/GameStateSlice"

export const GAME_WRAPPER = () => {
    const dispatch = useDispatch()

    return (
        <section className="game-wrapper-component">
            <BUTTON to={"/WINNER"} onClick={() => dispatch(userPicked("0"))} buttonImgLabel={ScissorsImg} outlineColor="outLineYellow" />

            <section className="center-wrapper">
                <BUTTON to={"/WINNER"} onClick={() => dispatch(userPicked("1"))} buttonImgLabel={SpockImg} outlineColor="outLineLightBlue" />
                <BUTTON to={"/WINNER"} onClick={() => dispatch(userPicked("2"))} buttonImgLabel={PaperImg} outlineColor="outLineBlue" />
            </section>

            <section className="bottom-wrapper">
                <BUTTON to={"/WINNER"} onClick={() => dispatch(userPicked("3"))} buttonImgLabel={LizardImg} outlineColor="outLinePurple" />
                <BUTTON to={"/WINNER"} onClick={() => dispatch(userPicked("4"))} buttonImgLabel={RockImg} outlineColor="outLineRed" />
            </section>
        </section>
    )
}
