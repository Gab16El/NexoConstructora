import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate( '/' ,{
        replace: true,
    });
  }

  const { escribir, onInputChange, onResetForm} = useForm({
    escribir: ''
  });

  const onFormSubmit = ( event ) =>{
    event.preventDefault();
    if( escribir.length <= 1 ) return;
    onResetForm();
}

  return (

    <div className="cont">
    <div className="card" onSubmit={ onFormSubmit }>
      <img src="src\assets\img\logohorizontal.png"/>
      <h3 className='h3log'>Inicia Sesion</h3>

      <div className="inputBox">
        <input type="text" required="required" name="user" autoComplete="off" onChange={ onInputChange }/>
        <span>Usuario</span>
      </div>

      <div className="inputBox">
        <input type="password" required="required" name="password" onChange={ onInputChange } />
        <span>Contraseña</span>
      </div>

      <button className="btnlog" onClick={ onLogin }>Ingresar</button>

    </div>
  </div>
    
  )
}
