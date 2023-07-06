import data from "../../data/Test.json"
import Card from "../../components/Card/index"
import "./home.css"

const HouseList = data

function Home() {
  return(
    <div className="Home">
      <div className="Home__title">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="Home__content">
        <div className="Home__grid" >
          {HouseList.map((house) => (
              <div key={house.id}>{Card(house)}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
