import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getGuitarById } from "../helpers";
import { useMemo } from "react";

export const GuitarPage = () => {

  const { id } = useParams();
  const guitar = useMemo( () => getGuitarById( id ), [ id ]) ;
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  }

  if ( !guitar ) {
    return <Navigate to="/fender" />
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={ `../public/assets/${ id }.jpg` } 
        alt={ guitar.refference }
        className="img-thumbnail animate__animated animate__fadeInLeft" 
        />
      </div>
      <div className="col-8">
        <h3>{ guitar.refference }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Brand:</b> { guitar.brand } </li>
          <li className="list-group-item"><b>Series:</b> { guitar.refference } </li>
          <li className="list-group-item"><b>Color:</b> { guitar.color } </li>
        </ul>

        <h5 className="mt-3"> Artists </h5>
        <p>{ guitar.artists }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
          >
          Back
        </button>
      </div>
    </div>
  )
}