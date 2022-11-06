import React from 'react'
import { Link } from "react-router-dom";
import RolesImg from "../../assets/svg/image-rules-bonus.svg"

export const Roles = () => {
    return (
        <section className='role'>
            <section className='wrapper'>
                <img className='roles-img' src={RolesImg} alt="game-roles" />
                <Link to={"/Home"} className='close-btn'>X</Link>
            </section>
        </section>
    )
}
