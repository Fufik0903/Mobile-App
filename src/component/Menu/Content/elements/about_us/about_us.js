import React from 'react';
import icon_left from "../../../../../assets/img/menu_img/icon_16x16_M_Arrow-left.svg";
import style from '../../../menu.module.css'
import {NavLink} from "react-router-dom";

const About_Us = ({setButton}) => {
    return (
        <>
            <div className={style.prev_item}>
                <span>About Us</span>
                <NavLink exact to={'/'} className={style.back}>
                    <button className={style.icon} onClick={() => setButton(false)}>
                        <img src={icon_left} alt=""/>
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default About_Us;
