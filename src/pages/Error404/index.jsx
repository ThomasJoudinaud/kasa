import "./error404.css"
import {Link} from "react-router-dom"

function Error404() {
    return(
      <div className="ErrorPage">
        <div className="ErrorPage__404">404</div>
        <div className="ErrorPage__Info">Oups! La page que vous demandez n'existe pas</div>
        <Link to="/" className="ErrorPage__Redirect">Retourner sur la page d'accueil</Link>
        
      </div>
    )
  }
  
  export default Error404;