import {FooterBoxes} from './FooterComponents/index'
import './style.css'
import React from 'react'
import Logo from '../../assets/logoDoctoralia.png'
import { Autorenew, Facebook, Instagram, LinkedIn } from '@material-ui/icons'

export const Footer = () => {
    return (
        <footer>
            <div className='footer-boxes'>
                <div className='boxes'>
                    {FooterBoxes('Serviço', ['Privacidade e cookies', 'Quem somos', 'Contato', 'Vagas', 'Termos e Condições', 'Imprensa'])}
                </div>
                <div className='boxes'>
                    {FooterBoxes('Pacientes', ['Especialistas', 'Clínicas e Hospitais', 'Pergunte ao especialista', 'Medicamentos', 'Serviços', 'Perguntas frequentes', 'Aplicações móveis', 'Diagnósticos por imagem'])}
                </div>
                <div className='boxes'>
                    {FooterBoxes('Especialistas da saúde', ['Blog', 'Conteúdos para especialistas', 'Serviços', 'Biblioteca Virtual', 'Widget para site', 'Conteúdos para clínicas', 'Central de Ajuda para Especialistas', 'Termos de uso do perfil profissional', 'Alerta de segurança', 'Teleconsulta'])}
                </div>
                <div className='boxes'>
                    {FooterBoxes(<img src={Logo} style={{width: '25px', height: '25px'}} alt='logo'/> , ['Doctoralia Brasil Serviços Online e Software Ltda', 'Rua Visconde do Rio Branco, 1488 - 2º andar - Batel', '80420-210 Curitiba (Paraná), Brasil'], 'Doctoralia')}
                    <a href='https://www.facebook.com/doctoralia.br/'><Facebook color="disabled" sx={{ fontSize: 35 }}/></a>
                    <a href='https://www.instagram.com/doctoralia_br/'><Instagram color="disabled" sx={{ fontSize: 35 }}/></a>
                    <a href='https://www.linkedin.com/authwall?trk=gf&trkInfo=AQElL71hFOcq7QAAAX0A6rq4QoHGzLWYTEXnAnq1K9LcTzIXeyDW4ljNFWutWRIEf4kAyndY-15OqsKskTUrZRyUfvU7deh1s9nstK9kEJMRQ5QXy7i_n_OFt79UISuvFGGimYc=&originalReferer=https://www.doctoralia.com.br/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdoctoralia-brasil%2F'><LinkedIn color="disabled" sx={{ fontSize: 35 }}/></a>
                    <a href='https://www.google.com.br/'><Autorenew color="disabled" sx={{ fontSize: 35 }}/></a>
                </div>
            </div>
            <div className='footer-credits'>
                <p>
                    www.doctoralia.com.br © 2021 - Agende agora sua consulta
                </p>
            </div>
        </footer>
    );
}