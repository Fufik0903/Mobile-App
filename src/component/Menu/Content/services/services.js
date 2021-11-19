import React, {useState} from 'react';
import icon_left from "../../../../assets/img/menu_img/icon_16x16_M_Arrow-left.svg";
import style from '../../menu.module.css'
import {NavLink} from "react-router-dom";
import CloudCalculationsContainer from "./cloud_calculation/cloud_calculation_container";
import CloudCalculations from "./cloud_calculation/cloud_calculation";

const ServiceElements = (props) => {
    const {setButton} = props;
    const [cloudCalcBtn, setCloudCalcBtn] = useState(false)
    console.log(cloudCalcBtn)
    return (
        <>{!cloudCalcBtn
            ? <>
                <div className={style.prev_item}>
                    <span>Services</span>
                    <NavLink exact to={'/'} className={style.back}>
                        <button className={style.icon} onClick={() => setButton(false)}>
                            <img src={icon_left} alt=""/>
                        </button>
                    </NavLink>
                </div>
                <CloudCalculationsContainer setCloudCalcBtn={setCloudCalcBtn}/>
            </>
            : <CloudCalculations setCloudCalcBtn={setCloudCalcBtn}/>}
        </>
    )
}

export default ServiceElements;
