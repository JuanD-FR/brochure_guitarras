import { Link } from "react-router-dom";

export const GuitarCard = ({ 
    id,
    brand,
    refference,
    artists,
    color
 }) => {

    const imageUrl = `/brochure_guitarras/assets/${ id }.jpg`;
    

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ imageUrl } className="card-img" alt={ refference } />
                </div>
                <div className="col-8">
                    <div className="car-body">
                        <h5 className="card-title">{ refference }</h5>
                        <p className="card-text">Color: { color }</p>
                        <h5 className="card-title"> Artists </h5>
                        <p className="card-text">{ artists }</p>
                        <Link to={`/guitars/${ id }`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
