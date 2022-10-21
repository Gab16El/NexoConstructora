import { VolquetesAdd, VolquetesList } from "../../components/"
import { useVolquetes } from "../../hooks";


export const CanteraComp = () => {

const{  volquetes, 
        volquetesCount, 
        deudoresVolquetesCount , 
        volquetesSum, 
        handleNewVolquetes, 
        handleToggleVolquetes, 
        handleDeleteVolquetes 
    } = useVolquetes();


    return (
        <>  
            <h1 className="titulo">
                Volquetes de hoy: { volquetesCount } - <small className="titulo">Deudores { deudoresVolquetesCount }</small> - <small className="titulo">Total: { volquetesSum }</small>
            </h1>
            <hr />
            <div className="gridd" >
                <div>
                    <VolquetesList 
                        volquetes = { volquetes } 
                        onDeleteVolquetes={ handleDeleteVolquetes } 
                        onToggleVolquetes={ handleToggleVolquetes } 
                    />
                </div>

                <div>
                    <h4 className="h4lol" >Agregar Nuevo Volquete:</h4>
                    <hr />
                    <VolquetesAdd onNewVolquete={ handleNewVolquetes }/>
                </div>
            </div>
        </>
    )
}
