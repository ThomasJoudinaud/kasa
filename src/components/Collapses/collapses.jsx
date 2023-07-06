import {useState, useRef} from "react"
import arrow from "../../assets/arrow.png"
import "./collapses.css"


function Collapses({title, content}){
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    const collapseRef = useRef()

    const contentType = (content) => {
        if (Array.isArray(content)) {
            return <div className="collapse__content__array">
                <ul>
                    {content.map((res) => {
                     return <li key={res}>{res}</li>
                    })}
                </ul>
                </div>
        } else {
            return <div className="collapse__content__text">{content}</div>
        }
    }

    return(
        <div className="collapse">
            <div className="collapse__title">
                <div className="collapse__title__content" onClick={toggle}>
                    {title} <img src={arrow} alt="arrow"  className={`collapse__arrow ${open ? 'collapse__arrow_rotation' : ''}`}/>
                </div>
            </div>
            <div className="animated__content" ref={collapseRef} style={
                open ? {
                    height: collapseRef.current.scrollHeight + "px"
                } : {
                    height: "0px"
                }}>
                <div className="collapse__content">
                    {contentType(content)}
                </div>
            </div>
        </div>
    )
}

export default Collapses

//             {open && <div className={`collapse__content ${open ? 'open' : ''}`}>