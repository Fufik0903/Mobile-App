import React from 'react';
import icon_left from "../../../../../assets/img/menu_img/icon_16x16_M_Arrow-left.svg";
import {NavLink} from "react-router-dom";
import style from "../../../menu.module.css";

const Managed_IT = ({setButton}) => {
    return (
        <>
            <div className={style.prev_item}>
                <span>Managed IT</span>
                <NavLink exact to={'/'} className={style.back}>
                    <button className={style.icon} onClick={() => setButton(false)}>
                        <img src={icon_left} alt=""/>
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default Managed_IT;
