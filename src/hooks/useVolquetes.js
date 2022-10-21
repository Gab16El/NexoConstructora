import { useEffect, useReducer } from 'react'
import { volqueteReducer } from '../Nexo/';


const init = () =>{
    return JSON.parse( localStorage.getItem('volquetes')) || [];
}


export const useVolquetes = () => {


    const [ volquetes, dispatch ] = useReducer( volqueteReducer, [], init)

    useEffect(() => {
      localStorage.setItem('volquetes', JSON.stringify( volquetes ) );
    }, [volquetes])
    

    const handleNewVolquetes = ( volquetes ) => {
        const action = {
            type: '[VOLQUETE] Add Volquete',
            payload: volquetes
        }

        dispatch( action );
    }

    const handleDeleteVolquetes = ( id ) => {
        dispatch({
            type: '[VOLQUETE] Remove Volquete',
            payload: id
        });
    }

    const sum = volquetes.reduce( function( prev, current ) {
        return prev + +current.precio
    }, 0);

    return {
        volquetes,

        volquetesCount: volquetes.length,
        deudoresVolquetesCount: volquetes.filter( volquetes => !volquetes.done).length,
        volquetesSum: sum,
        handleNewVolquetes,
        handleDeleteVolquetes,
        
    }

}
