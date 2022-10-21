export const volqueteReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[VOLQUETE] Add Volquete':
            return [ ...initialState, action.payload ];

        case '[VOLQUETE] Remove Volquete':
            return initialState.filter( volquete => volquete.id !== action.payload );

        case '[VOLQUETE] Toggle Volquete':
            return initialState.map( volquete => {
                
                if( volquete.id === action.payload ){
                    return{
                        ...volquete,
                        done: !volquete.done
                    }
                }

                return volquete;
            });

        default:
            return initialState;
    }

}