import logo from "../../assets/svg/logo-bonus.svg"
import { SCORE } from "./Score"
export const HEADER = () => {
    return (
        <section className="header-component">
            <header className="header">
                <img className="logo-icon" src={logo} alt="logo" />
                <SCORE />
            </header>
        </section>
    )
}
