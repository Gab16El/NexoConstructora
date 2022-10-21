import { useForm } from "../hooks"


export const CostosAdd = ({ onNewCostos }) => {
  
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const { gastos, precio, fecha, onInputChange, onResetForm} = useForm({
    gastos: '',
    fecha: date,
    precio: ''
  });

  

  const onFormSubmit = ( event ) =>{
    event.preventDefault();
    if( gastos.length <= 1 ) return;
    
    const newCostos = {
      id: new Date().getTime(),
      gastos: gastos,
      fecha: date,
      precio: precio,
    } 

    onNewCostos( newCostos );
    onResetForm();
  }

  return (
    <>
      <form onSubmit={ onFormSubmit } className="formulario">
        
        <input 
          type="text" 
          placeholder="Ingrese el item que compro " 
          className="form-control paddinginput" 
          name='gastos' 
          value={ gastos } 
          onChange={ onInputChange } 
        />

        <input 
          type="text"
          placeholder="Ingrese la fecha " 
          className="form-control paddinginput" 
          name='fecha' 
          value={ fecha }
          onChange={ onInputChange }
          disabled 
        />
        
        <input 
          type="number"  
          placeholder="Ingrese el Costo" 
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
