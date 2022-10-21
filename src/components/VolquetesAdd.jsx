import { useForm } from "../hooks";

export const VolquetesAdd = ({ onNewVolquete }) => {

    const { conductor, numOrder , precio, onInputChange, onResetForm} = useForm({
        conductor: '',
        numOrder: '',
        precio: ''
    });

    const onFormSubmit = ( event ) =>{
        event.preventDefault();
        if( conductor.length <= 1 ) return;
        
        const newVolquete = {
            id: new Date().getTime(),
            numOrder: numOrder,
            conductor: conductor,
            precio: precio,
            done: false,
        }

        onNewVolquete( newVolquete );
        onResetForm();
    }


  return (
    <>  
       
        <form onSubmit={ onFormSubmit } className="formulario">
            <input 
                type="number" 
                placeholder="ID" 
                className="form-control paddinginput" 
                name='numOrder' 
                value={ numOrder } 
                onChange={ onInputChange } 
            />
            
            <input 
                type="text" 
                placeholder="Ingrese conductor" 
                className="form-control paddinginput" 
                name='conductor' 
                value={ conductor } 
                onChange={ onInputChange } 
            />
            
            <input 
                type="number" 
                placeholder="Precio" 
                className="form-control paddinginput" 
                name='precio' 
                value={ precio } 
                onChange={ onInputChange } 
            />
            
            <button 
                type="submit" 
                className="btn btn-default btn-sm boton mt-2 "
            >

            Agregar

            </button>
            
        </form>
      
    </>
  )
}
