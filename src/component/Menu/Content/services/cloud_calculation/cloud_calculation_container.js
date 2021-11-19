import React from 'react';
import icon_rigth from "../../../../../assets/img/menu_img/icon_16x16_M_Arrow-right.svg";
import s from '../../elements/elements.module.css'
import style from '../../../menu.module.css'

const CloudCalculationsContainer = ({setCloudCalcBtn}) => {
    return (
        <div className={s.container}>
            <div className={s.element}>
                <span>Облачные вычисления</span>
                    <button className={style.icon} onClick={() => setCloudCalcBtn(true)}>
                        <img src={icon_rigth} alt=""/>
                    </button>
            </div>
            <div className={s.element}>
                <span>Выделенные серверы</span>
                <button className={style.icon}>
                    <img src={icon_rigth} alt=""/>
                </button>
            </div>
            <div className={s.element}>
                <span>Платформенные сервисы</span>
                <button className={style.icon}>
                    <img src={icon_rigth} alt=""/>
                </button>
            </div>
            <div className={s.element}>
                <span>Информационная безопасность</span>
                <button className={style.icon}>
                    <img src={icon_rigth} alt=""/>
                </button>
            </div>
        </div>

    )
}

export default CloudCalculationsContainer;
