import { FaEye, FaTrashAlt } from 'react-icons/fa';

export const VolquetesBody = ({ volquete, onDeleteVolquetes }) => {
  return (
        <tr className="spanitoblacn align-self-center">
            <th>{ volquete.numOrder }</th>
            <th>{ volquete.conductor } </th>
            <th>{ volquete.precio } </th>
            <th>
                <button
                className="btn btn-warning" 
                // onClick={ ver el modal p chibolo}
                > <FaEye className='fa'/>
                </button>
            </th>
            <th>
                <button
                className="btn btn-danger" 
                onClick={ () => onDeleteVolquetes(volquete.id) }
                > <FaTrashAlt className='fa'/>
                </button>
            </th>
        </tr>

  )
}
