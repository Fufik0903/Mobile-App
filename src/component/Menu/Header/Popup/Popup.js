import React from 'react';
import s from './popup.module.css'
import RU_Photo from '../../../../assets/img/menu_img/Icon_RU_small.svg'
import BY_Photo from '../../../../assets/img/menu_img/Icon_BY.svg'
import NL_Photo from '../../../../assets/img/menu_img/Icon_NL.svg'
import US_Photo from '../../../../assets/img/menu_img/Icon_US.svg'
import KZ_Photo from '../../../../assets/img/menu_img/Icon_KZ.svg'
import TR_Photo from '../../../../assets/img/menu_img/Icon_TR.svg'


const Popup = ({modalActive, setModalActive}) => {
    return (
        <div className={modalActive ? s.container : s.nonActive} onClick={() => setModalActive(false)}>
            <div className={s.list}>
                <span className={s.title}>Страна</span>
                <ul>
                    <li>
                        <img src={US_Photo} alt=""/>
                        <span>United States</span>
                    </li>
                    <li>
                        <img src={NL_Photo} alt=""/>
                        <span>Netherlands</span>
                    </li>
                    <li>
                        <img src={BY_Photo} alt=""/>
                        <span>Беларусь</span>
                    </li>
                    <li>
                        <img src={RU_Photo} alt=""/>
                        <span>Россия</span>
                    </li>
                    <li>
                        <img src={KZ_Photo} alt=""/>
                        <span>Казахстан</span>
                    </li>
                    <li>
                        <img src={TR_Photo} alt=""/>
                        <span>Turkiye</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Popup;