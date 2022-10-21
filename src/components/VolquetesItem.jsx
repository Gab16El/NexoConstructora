import { VolquetesBody } from "./VolquetesBody"

export const VolquetesItem = ({ volquete, onDeleteVolquetes, onToggleVolquetes }) => {
    return (
        <>  
            <tbody>
                <VolquetesBody 
                    volquete={ volquete } 
                    onDeleteVolquetes= { onDeleteVolquetes } 
                    onToggleVolquetes= { onToggleVolquetes }
                />
            </tbody>
        </>
      )
}
