import { FaTrashAlt, FaEye } from "react-icons/fa"
import { VolquetesItem } from "./VolquetesItem"

export const VolquetesList = ({ volquetes = [], onDeleteVolquetes, onToggleVolquetes }) => {
    return (
        <>
            <table> 
                <thead className="color"> 
                    <tr className="listavolquete">
                        <th>ID</th>
                        <th>CONDUCTOR</th>
                        <th>PRECIO</th>
                        <th><FaEye className='fa'/></th>
                        <th><FaTrashAlt className='fa'/></th>
                    </tr>
                </thead>

                {
                    volquetes.map( volquete => (

                        <VolquetesItem 
                            key={ volquete.id } 
                            volquete = { volquete } 
                            onDeleteVolquetes={ onDeleteVolquetes } 
                            onToggleVolquetes={ onToggleVolquetes } 
                        />
                    ))
                }

            </table>
        </>
      )
}
