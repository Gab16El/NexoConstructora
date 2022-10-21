import { useEffect, useReducer } from 'react'
import { costoReducer } from '../Nexo/';


const init = () =>{
    return JSON.parse( localStorage.getItem('costos')) || [];
}


export const useCostos = () => {


    const [ costos, dispatch ] = useReducer( costoReducer, [], init)

    useEffect(() => {
      localStorage.setItem('costos', JSON.stringify( costos ) );
    }, [costos])
    

    const handleNewCostos = ( costos ) => {
        const action = {
            type: '[COSTOS] Add Costo',
            payload: costos
        }

        dispatch( action );
    }

    const handleDeleteCostos = ( id ) => {
        dispatch({
            type: '[COSTOS] Remove Costo',
            payload: id
        });
    }
    

    const sum = costos.reduce( function( prev, current ) {
        return prev + +current.precio
    }, 0);

    return {
        costos,
        costosCount: costos.length,
        costosSum: sum,
        handleNewCostos,
        handleDeleteCostos,
    }

}
