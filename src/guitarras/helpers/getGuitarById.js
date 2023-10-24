import { guitars } from "../data/guitars"

export const getGuitarById = ( id ) => {
    return guitars.find( guitar => guitar.id === id );
}
