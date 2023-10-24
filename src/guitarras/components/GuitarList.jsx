import { useMemo } from "react"
import { getGuitarByBrand } from "../helpers"
import { GuitarCard } from "."

export const GuitarList = ({ brand }) => {

    const guitars = useMemo( () => getGuitarByBrand( brand ), [ brand ] );
    
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            guitars.map( guitar => (
                <GuitarCard 
                    key={ guitar.id }
                    { ...guitar }
                />
            ))
        }
    </div>
  )
}
