import { CostosList, CostosAdd } from '../../components'
import { useCostos } from '../../hooks'

export const PendientesComp = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const{
        costos,
        costosSum,
        handleNewCostos,
        handleDeleteCostos,
        handleToggleCostos
    } = useCostos();


  return (
    <>  
        <h1 className="titulo">
            Seccion de Gastos de hoy: { date }
        </h1>
        <hr />
        <div className="gridd" >
            <div>
                <CostosList 
                    costos = { costos } 
                    onDeleteCostos={ handleDeleteCostos } 
                    onToggleCostos={ handleToggleCostos }
                    costosSum={ costosSum }
                />
            </div>

            <div>
                <h4 className="h4lol" >Agregar un nuevo Gasto:</h4>
                <hr />
                <CostosAdd 
                    onNewCostos={ handleNewCostos }
                />
            </div>
        </div>
        
    </>
  )
}
