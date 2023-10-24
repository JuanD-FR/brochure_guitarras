import { guitars } from '../data/guitars';

export const getGuitarByBrand = ( brand ) => {
    const validBrand = ['Fender', 'Ibanez', 'Schecter', 'Charvel'];
    if ( !validBrand.includes( brand )){
        throw new Error(`${ brand } is not valid`);
    }

    return guitars.filter( guitar => guitar.brand === brand );
}