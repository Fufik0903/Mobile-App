import React, {useState} from 'react';
import s from "./header.module.css";
import style from '../menu.module.css'
import language_logo from "../../../assets/img/menu_img/Icon_RU.svg";
import icon_down from "../../../assets/img/menu_img/icon_16x16_M_Arrow-bottom.svg";
import icon_close from "../../../assets/img/menu_img/Close_Button.svg";
import Popup from "./Popup/Popup";

const Header = ({closeBtn, setCloseBtn, modalActive, setModalActive}) => {
    return (
        <div className={s.title}>
            <div className={s.language} onClick={() => setModalActive(true)}>
                <img src={language_logo} alt=""/>
                <span>Ru</span>
                <button className={style.icon}>
                    <img src={icon_down} alt=""/>
                </button>
            </div>
            <button className={style.icon} onClick={() => setCloseBtn(false)}>
                <img src={icon_close} alt=""/>
            </button>
            <Popup modalActive={modalActive} setModalActive={setModalActive}/>
        </div>
    )
}

export default Header;