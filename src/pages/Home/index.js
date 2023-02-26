import React, { useState } from 'react'
import './style.css'
import { Button, TextField } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import Rating from '@mui/material/Rating';
import { Apartment, VideocamRounded, Public, ArrowForward, Event, WatchLater, ThumbUp } from '@material-ui/icons';
import { speciality } from '../../services/speciality-mock';
import { cities } from '../../services/cities-mock'
import { Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { widget } from '../../components/Widgets';
import { createDoctorInfo } from '../../components/DoctorsInfo';
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'



export const Home = ({ setSelectedCity, setSelectedSpeciality, setCheckCrm, selectedCity, selectedSpeciality}) => {
  const [variant, setVariant] = useState('inLocal')
  return (
    <>
      {setCheckCrm('')}
      <div className='home-content'>
        <h1 className='title'>Agende Agora Sua Consulta</h1>
        <h2 className='subtitle'>Mais de 700 mil especialistas de saúde estão prontos para te ajudar</h2>
        <div className='content'>
          <div className="content-search">
            <div className="content-search-buttons">
              <Button color='inherit'
                sx={{ marginRight: "10px", height: "45px", borderColor: 'white', borderRadius: '20px', color: 'black' }}
                variant={variant === 'inLocal' ? 'contained' : 'outlined'}
                startIcon={<Apartment />}
                onClick={() => setVariant('inLocal')} >No local
              </Button>

              <Button
                color='inherit'
                sx={{ marginRight: "10px", height: "45px", borderColor: 'white', borderRadius: '20px', color: 'black' }}
                variant={variant === 'teleconsult' ? 'contained' : 'outlined'}
                startIcon={<VideocamRounded />}
                onClick={() => setVariant('teleconsult')} >Teleconsulta
              </Button>
            </div>
            <div className='content-search-inputs'>

              <Autocomplete
                style={{ padding: '5px' }}
                disablePortal
                id="combo-box-demo"
                options={speciality}
                sx={{ width: '100%' }}
                renderInput={(params) => 
                <TextField 
                  style={{ backgroundColor: 'white', color: 'black', borderRadius: "5px" }} 
                  {...params} 
                  onClick={setSelectedSpeciality(params.inputProps.value)}
                  label="nome, especialidade, serviço" />
              }
              />

              {variant === 'inLocal' &&
                <Autocomplete
                  style={{ padding: '5px' }}
                  disablePortal
                  id="combo-box-demo"
                  options={cities}
                  sx={{ width: '100%' }}
                  renderInput={(params) => 
                  <TextField
                    style={{ backgroundColor: 'white', color: 'black', borderRadius: "5px" }} 
                    {...params} 
                    onClick={setSelectedCity(params.inputProps.value)}
                    label="p. ex. São Paulo" />}
                />
              }

              <Link to={selectedSpeciality === '' && selectedCity === '' ? '/' : '/doctors'} style={{ textDecoration: 'none', cursor: selectedSpeciality === '' && selectedCity === '' ? 'default' : 'pointer'}}>
                <Button 
                disabled={selectedSpeciality === '' && selectedCity === ''}
                variant="contained" 
                color="primary" size="large" 
                style={{ marginRight: "10px", height: "55px", color: 'white', marginLeft: '5px' }} 
                startIcon={<Search />}>Pesquisar
                </Button>
              </Link>

            </div>

          </div>
          <div className="content-bottom">
            <div className='content-bottom-top'>
              <Public />
              <p>Cuide da sua saúde durante a pandemia</p>
            </div>
            <div className='content-bottom-bottom'>
              <p>Atendimento médico seguro e sem filas</p>
              <p style={{ color: '#1976D2', cursor: 'pointer' }}>Receba a ajuda que precisa <ArrowForward color="primary" /></p>
            </div>
          </div>
        </div>
      </div>

      <div className='popular-specialities'>
        <div className='space'>
          <div className='speciality-list'>
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Ginecologista'))} style={{ textDecoration: 'none', color:'black', cursor: 'pointer', padding: '6px'}}>Ginecologista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Psiquiatra'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Psiquiatra</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Psicólogo'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Psicólogo</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Dermatologista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Dermatologista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Ortopedista - Traumatologista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Ortopedista - Traumatologista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Endocrinologista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Endocrinologista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Oftamologista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Oftamologista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Cardiologista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Cardiologista</Link>
            <li />
          </div>
          <div className='speciality-list-b'>
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Urologista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Urologista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Dentista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Dentista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Neurologista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Neurologista</Link>
            <li />
            <Link to='/doctors' onClick={() => (setSelectedSpeciality('Nutricionista'))} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer', padding: '6px' }}>Nutricionista</Link>
          </div>
        </div>
      </div>

      <div className='widgets'>
        {widget(<Search style={{ color: '#00C3A5', alignItems: 'center', display: 'flex' }} />, 'Encontre Especialistas', 'Busque por especialistas de saúde em sua região. Filtre por planos de saúde, tratamentos ou disponibilidade.')}
        {widget(<Event style={{ color: '#00C3A5', alignItems: 'center', display: 'flex' }} />, 'Marque Consultas', 'Escolha o profissional, dia e horário que desejar, agendando sua consulta em até dois minutos. Sem complicação.')}
        {widget(<WatchLater style={{ color: '#00C3A5', alignItems: 'center', display: 'flex' }} />, 'Receba Lembretes', 'Confirmamos tudo imediatamente pelo email informado e, antes da consulta, um lembrete será enviado via celular.')}
        {widget(<ThumbUp style={{ color: '#00C3A5', alignItems: 'center', display: 'flex' }} />, 'Avalie o Serviço', 'Após a consulta você poderá deixar sua opinião sobre o serviço. Tudo isso de forma gratuita, simples e rápida.')}
      </div>

      <div className='comment'>
        <div className='first-column'>
          <h2>Respostas de especialistas</h2>
          <p>Na ecografia da tireóide constou: Aumento de volume das glândulas paratireóides, bilateralmente, especialmente à esquerda onde mede 1,5 x 05 cm nos maiores eixo. Terei que fazer cirurgia.</p>
          <span style={{fontSize: '12px', opacity: '0.4'}}>
            RESPOSTA DO ESPECIALISTA DA SAÚDE
          </span>
          {createDoctorInfo(avatar1, 'Rodrigo Silva', 'Olá! É necessário fazer uma avaliação com exames laboratoriais do perfil de cálcio e PTH. Após esses exames pode ser necessário uma cintilografia de paratireoide e se houver hiperfunção de 2…')}
          <p>Fiz tomografia o resultado é pequena calcificação hepática e calcificação vascular isso pode ser um câncer tem cura e presisa de cirurgia</p>
          <span style={{fontSize: '12px', opacity: '0.4'}}>
            RESPOSTA DO ESPECIALISTA DA SAÚDE
          </span>
          {createDoctorInfo(avatar2, 'Dr. Alexandre Augusto Monteiro Sato', 'Boa noite! Fique tranquilo! São achados benignos, não tem nenhuma relação com câncer e não precisam de cirurgia nem serem curados. São apenas achados do exame sem importância clínica!')}
        </div>
        <div className='second-column'>
          <h2>Opiniões mais recentes</h2>
          {createDoctorInfo(avatar3, 'Guilherme De Campos Marino', 'EXCELENTE MÉDICO SUPER ATENCIOSO, EXPLICA CERTINHO COMO FUNCIONA O PROCEDIMENTO.... DEUS TE ABENÇOE DR. GUILHERME', <Rating sx={{ fontSize: '20px' }} readOnly value={5} style={{ color: 'var(--main-color)', marginRight: '15px' }} />, 'Thiago Cardoso')}
          {createDoctorInfo(avatar4, 'Daniel Vianna Ramos', 'Excelente profissional, bem capacitado tem dominio sobre o assunto, deixa bem claro eficácia de tratamento, realmente esclarecedor', <Rating sx={{ fontSize: '20px' }} readOnly value={5} style={{ color: 'var(--main-color)', marginRight: '15px' }} />, 'Josmar')}
          {createDoctorInfo(avatar5, 'Igor Vitoi Cangussu', 'Excelente e atencioso Faz o mais importante: ouvir o paciente Muito qualificado e conhecedor da especialidade', <Rating sx={{ fontSize: '20px' }} readOnly value={5} style={{ color: 'var(--main-color)', marginRight: '15px' }} />, 'Cesar B')}
        </div>

      </div>

    </>
  );
};
