import { CostosBody } from "./"

export const CostosItem = ({ costos, onDeleteCostos }) => {
  return (
    <>  
        <tbody>
            <CostosBody 
                costos={ costos } 
                onDeleteCostos= { onDeleteCostos }
            />
        </tbody>
    </>
  )
}
