import { FaTrashAlt, FaMoneyBillWave } from "react-icons/fa"
import { CostosItem } from "./"

export const CostosList = ({ costos = [], costosSum, onDeleteCostos }) => {


  return (
    <>
    <table> 
        <thead className="color"> 
            <tr className="listavolquete">
                <th>Nombre Producto</th>
                <th>Fecha de Compra</th>
                <th>Precio de Producto</th>
                <th><FaTrashAlt className='fa'/></th>
            </tr>
        </thead>

        {
            costos.map( costos => (

                <CostosItem
                    key={ costos.id }  
                    costos = { costos }
                    onDeleteCostos={ onDeleteCostos } 
                    costosSum={ costosSum }
                />
            ))
        }

        <tfoot className="color"> 
            <tr className="listavolquete">
                <th>TOTAL</th>
                <th>S/.</th>
                <th>{ costosSum }</th>
                <th><FaMoneyBillWave className="fa" /></th>
            </tr>
        </tfoot>

    </table>
</>
  )
}
