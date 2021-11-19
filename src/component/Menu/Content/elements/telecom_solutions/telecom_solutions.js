import React from 'react';
import icon_left from "../../../../../assets/img/menu_img/icon_16x16_M_Arrow-left.svg";
import style from '../../../menu.module.css'
import {NavLink} from "react-router-dom";

const Telecom_Solutions = ({setButton}) => {
    return (
        <>
            <div className={style.prev_item}>
                <span>Telecom Solutions</span>
                <NavLink exact to={'/'} className={style.back}>
                    <button className={style.icon} onClick={() => setButton(false)}>
                        <img src={icon_left} alt=""/>
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default Telecom_Solutions;
