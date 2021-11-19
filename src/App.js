import React, {useState} from 'react';
import Header from "./component/Menu/Header/header";
import s from '../src/component/Menu/menu.module.css'
import w from './app.module.css'
import Contacts from "./component/Menu/Contacts/Contacts";
import ContentContainer from "./component/Menu/Content/Content_Container";


const App = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const [closeBtn, setCloseBtn] = useState(false);
    return (
        <>
            {!closeBtn
                ? <div className={w.menu}>
                    <button className={w.burger} onClick={() => setCloseBtn(true)}>Open</button>
                </div>
                : <div className={s.menu}>
                    <Header closeBtn={closeBtn} setCloseBtn={setCloseBtn} modalActive={modalActive}
                            setModalActive={setModalActive}/>
                    <ContentContainer/>
                    <Contacts/>
                </div>}
        </>
    );
}

export default App;
