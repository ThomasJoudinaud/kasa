import "./card.css"
import {Link} from "react-router-dom"

function Card(house) {
    return(
        <div className="card">
            <Link to={`house/${house.id}`}>
                <img className="card__cover" src={house.cover} alt={house.title}/>
                <span className="card__title" >{house.title}</span>
            </Link>
        </div>
    )
}

export default Card