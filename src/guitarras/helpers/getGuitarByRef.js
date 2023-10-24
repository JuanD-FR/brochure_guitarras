import { guitars } from "../data/guitars";

export const getGuitarByRef = ( name = '') => {

    name = name.toLowerCase().trim();

    if ( name.length === 0) return [];

    return guitars.filter(
        guitar => guitar.refference.toLowerCase().includes( name ) 
    );
}
