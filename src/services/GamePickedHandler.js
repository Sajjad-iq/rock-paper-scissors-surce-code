import { useSelector } from 'react-redux'

export const GamePickedHandler = () => {
    const { userPicked, gamePicked } = useSelector((state) => state.game)
    function userPick() {
        switch (userPicked) {
            case "0":
                return "ScissorsImg outLineYellow"
            case "1":
                return "SpockImg outLineLightBlue"
            case "2":
                return "PaperImg outLineBlue"
            case "3":
                return "LizardImg outLinePurple"
            case "4":
                return "RockImg outLineRed"
            default:
                return ""
        }
    }


    function GamePick() {
        switch (gamePicked) {
            case "0":
                return "ScissorsImg outLineYellow"
            case "1":
                return "SpockImg outLineLightBlue"
            case "2":
                return "PaperImg outLineBlue"
            case "3":
                return "LizardImg outLinePurple"
            case "4":
                return "RockImg outLineRed"
            default:
                return ""
        }
    }
    return { userPick, GamePick }
}
