import React, {useState} from "react";
import Elements from "./elements/elements";
import s from "../menu.module.css";

const Content = (props) => {
    const {tasks} = props
    const [button, setButton] = useState(false);
    const elements = tasks.map(item => <Elements item={item} button={button} setButton={setButton}/>);
    return (
        <div className={s.content}>
            <div className={s.items}>
                {elements}
            </div>
        </div>
    )
}
export default Content;