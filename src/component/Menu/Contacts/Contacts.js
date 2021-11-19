import React from 'react';
import s from "./contacts.module.css";


const Contacts = () => {
    return (
        <div className={s.information}>
            <div className={s.contacts}>Контакты</div>
            <div className={s.seacrh}>Поиск</div>
        </div>
    )
}
export default Contacts;