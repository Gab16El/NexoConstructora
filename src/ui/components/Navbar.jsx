import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () =>{
        navigate('/login', {
            replace: true,
        }); 
    }


    return (
        <nav className="topnav">
            
            <Link 
                to="/"
            >
                <img src="src\assets\img\logohorizontal.png" className='navbarImg'/>
            </Link>

                <div className='navbaresp'>

                    <NavLink 
                        className={ ({ isActive }) => `paddingLinks ${ isActive ? 'active' : '' } `} 
                        to="/lotizacion"
                    >
                        Lotizaciones
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `paddingLinks ${ isActive ? 'active' : '' } `}
                        to="/cantera"
                    >
                        Cantera J-A
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `paddingLinks ${ isActive ? 'active' : '' } `}
                        to="/pendientes"
                    >
                        Contabilidad
                    </NavLink>

                    
                    <NavLink 
                        className={ ({ isActive }) => `paddingLinks ${ isActive ? 'active' : '' } `}
                        to="/apoyo"
                    >
                        Documentos
                    </NavLink>

                    <div className="divEnd">
                        <ul>
                            <span>
                                Noé Gabriel
                            </span>

                            <button 
                                className="btn btn-default btn-sm btnn"
                                onClick={ onLogout }
                            >
                            <span className="glyphicon glyphicon-log-out spanito"></span> Logout  
                            </button>
                        </ul>
                    </div>

                </div>

        </nav>
    )
}