import { FaTrashAlt } from 'react-icons/fa';

export const CostosBody = ( { costos, onDeleteCostos } ) => {
  return (
    <tr className="spanitoblacn align-self-center">
        <th>{ costos.gastos } </th>
        <th>{ costos.fecha } </th>
        <th>{ costos.precio } </th>
        <th>
            <button
            className="btn btn-danger" 
            onClick={ () => onDeleteCostos(costos.id) }
            > <FaTrashAlt className='fa'/>
            </button>
        </th>
    </tr>
  )
}
