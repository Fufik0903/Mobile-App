import React from 'react';
import s from '../../elements/elements.module.css'
import style from '../service.module.css'
import icon_left from "../../../../../assets/img/menu_img/icon_16x16_M_Arrow-left.svg";

const CloudCalculations = ({setCloudCalcBtn}) => {
    return (
        <>
            <div className={s.prev_item}>
                <button className={s.icon} onClick={() => setCloudCalcBtn(false)}>
                    <img src={icon_left} alt=""/>
                </button>
                <span>Облачные вычисления</span>
            </div>
            <div className={s.container}>
                <div className={style.element}>
                    <h1>Cloud consulting</h1>
                    <span>Relational database serviced fro MySQL, PostgreSql, and SQl server.</span>
                </div>
                <div className={style.element}>
                    <h1>Cloud infrastructure analytics</h1>
                    <span>Health-specific solutions to enhance the patient experience.</span>
                </div>
                <div className={style.element}>
                    <h1>Hybrid Cloud</h1>
                    <span>Data storage, AI, and analytics solutions for government agencies.</span>
                </div>
                <div className={style.element}>
                    <h1>Hybrid Cloud</h1>
                    <span>Data storage, AI, and analytics solutions for government agencies.</span>
                </div>
                <div className={style.element}>
                    <h1>Multicloud</h1>
                    <span>Relational database services for MySQL, PostgreSQL, and SQL server.</span>
                </div>
                <div className={style.element}>
                    <h1>Multicloud</h1>
                    <span>Relational database services for MySQL, PostgreSQL, and SQL server.</span>
                </div>
            </div>
        </>
    )
}

export default CloudCalculations;
