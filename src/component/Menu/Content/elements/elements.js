import React from 'react';
import s from '../../menu.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import ServiceElements from "../services/services";
import About_Us from "./about_us/about_us";
import Telecom_Solutions from "./telecom_solutions/telecom_solutions";
import Managed_IT from "./mangedIT/managedIT";

const Elements = (props) => {
    const {name, img, navLink} = props.item
    const {button, setButton} = props;
    const link = () => {
        switch (navLink) {
            case '/services': {
                return <Routes>
                    <Route path={navLink} element={<ServiceElements setButton={setButton}/>}/>
                </Routes>
            }
            case '/managed_it': {
                return <Routes>
                    <Route path={navLink} element={<Managed_IT setButton={setButton}/>}/>
                </Routes>
            }
            case '/telecom_solutions': {
                return <Routes>
                    <Route path={navLink} element={<Telecom_Solutions setButton={setButton}/>}/>
                </Routes>
            }
            case '/about_us': {
                return <Routes>
                    <Route path={navLink} element={<About_Us setButton={setButton}/>}/>
                </Routes>
            }
                defaut:return <></>
        }
    }

    return (
        <>
            {!button
                ? <div className={s.main_item}>
                    <span>{name}</span>
                    <NavLink to={navLink}>
                        <button className={s.icon} onClick={() => setButton(true)}>
                            <img src={img} alt=""/>
                        </button>
                    </NavLink>
                </div>
                : link()
            }
        </>)
}
export default Elements;
