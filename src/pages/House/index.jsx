import { useParams } from "react-router-dom"
import data from "../../data/Test.json"
import Error404 from "../Error404/index"
import Gallery from "../../components/Gallery/index"
import Collapses from "../../components/Collapses/collapses"
import "./house.css"

const House = () => {
  const {id} = useParams()

  const house = data.find((product) => product.id === id);
  if (!house) {
    return <Error404 />;
  }

  const { title, location, tags, rating, host, equipments, description, pictures } = house

  return(
    <div className="house__page">
      <div className="house__page__carousel">
        <Gallery PictureArray ={pictures}/>
      </div>
      <div className="house__page__information">
        <div className="house__page__information__houseinfo">
          <div className="house__page__information__title">
            {title}
            <div className="house__page__information__houseinfo__location">
            {location}
          </div>
          </div>
          <div className="house__page__information__houseinfo__tag">
            {tags.map((tag) => (
                <div key={tag} className="house__page__information__houseinfo__tag__object">{tag}</div>
              ))}
          </div>
        </div>
        <div className="house__page__information__hostinfo">
          <div className="house__page__information__hostinfo__name">
            {host.name}
            <img src={host.picture} alt="l'hôte du logement" />
          </div>
          <div className="house__page__information__hostinfo__rate">
            {[1,2,3,4,5].map((star) => {
								return (
                  <span key={star} className={rating >= star ? "rated" : ""}>★</span>
								)
						  })}
          </div>
        </div>
      </div>
      <div className="house__page__colapse">
        <div className="house__page__colapse__object">
          <Collapses title="Description" content={description}/>
        </div>
        <div className="house__page__colapse__object">
          <Collapses title="Equipements" content={equipments}/>
        </div>
      </div>
    </div>
  )
}


export default House;