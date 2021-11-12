import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Logo from '../../assets/logoDoctoraliaBranca.png'


export const Header = () => {
    return (  
        <header>
            <Link to='/' className="logo">           
                <img className='logoimg' src={Logo} alt='logo'></img>
                <h1>Doctoralia</h1>    
            </Link>
           
            <div className="links">
                <Link to="/doctors" className='buttons-header secundary-color'>Especialistas</Link>
                <Link to="/examns" className='buttons-header'>Exames</Link>
                <Link to="/datasecurity" className='buttons-header'>Segurança de Dados</Link>
                <Link to="/askdoctors" className='buttons-header'>Pergunte ao especialista</Link>              
                <section>
                    <details className='list-button'>
                        <summary>
                            Inscrever-se
                        </summary>
                        <section className="options">
                            <div className="option">
                                Como Paciente
                            </div>
                            <div className="option">
                                Como Profissional de Saúde
                            </div>
                            <div className="option">
                                Como Clínica ou Hospital
                            </div>
                        </section>
                    </details>
                </section>
                <Link to="/signin" className='buttons-header'>Entrar</Link>
                <Link to="/register" className='buttons-header registration'>Você é um profissional da saúde?</Link>
            </div>
        </header>
    );
}


