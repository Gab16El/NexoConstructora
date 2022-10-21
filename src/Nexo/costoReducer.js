export const costoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[COSTOS] Add Costo':
            return [ ...initialState, action.payload ];

        case '[COSTOS] Remove Costo':
            return initialState.filter( costo => costo.id !== action.payload );

        case '[COSTOS] Toggle Costo':
            return initialState.map( costo => {
                
                if( costo.id === action.payload ){
                    return{
                        ...costo,
                        done: !costo.done
                    }
                }

                return costo;
            });

        default:
            return initialState;
    }

}