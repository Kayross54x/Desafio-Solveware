import React from 'react';
import { createDoctorInfo } from '../../components/DoctorsInfo';
import './style.css'
import { Button, Rating } from '@material-ui/core';
import { doctors } from '../../services/doctors-mock';
import { EventNote, Message, Payment, Place, Security } from '@material-ui/icons';



export const DoctorsFound = ({selectedCity, selectedSpeciality, checkCrm, setCheckCrm}) => {
  return (
    
    checkCrm === ''
    ? 
      (
        selectedCity === '' || selectedSpeciality === '' 
        ?
          (
            selectedCity === '' && selectedSpeciality !== '' ?
            (
            <div className='main'>
              <h2 style={{fontFamily: 'roboto'}}>{selectedSpeciality} - Teleconsulta</h2>
              <div className='main-content'>
                <div className='doctors-container'>
                  {doctors.map((doctor) => (
                    (doctor.speciality === selectedSpeciality) 
                    && 
                    <>
                      <h2>
                        {
                        createDoctorInfo(
                          doctor.photo, 
                          doctor.name, 
                          doctor.speciality, 
                          <Rating sx={{ fontSize: '20px' }} readOnly value={5} style={{ color: 'var(--main-color)', marginRight: '15px' }} />, 
                          doctor.contactNumber,
                          setCheckCrm,
                          doctor.crm)
                        }
                      </h2>
                
                      <p className='description'>{doctor.description}</p>
                    </>
                  ))}
                </div>
                <div className='map'>
                  <iframe title="Brasil" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31759630.457468405!2d-69.6394808113453!3d-13.663356945500425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1636573725583!5m2!1spt-BR!2sbr" style={{width: '300px', height: '530px', border: '0', allowfullscreen: '', loading: 'lazy'}}></iframe>
                </div>
              </div>
            </div>
            )
            :
            selectedCity !== '' && selectedSpeciality === '' &&
              ( 
                <div className='main'>
                  <h2 style={{fontFamily: 'roboto'}}>{selectedCity}</h2>
                  <div className='main-content'>
                    <div className='doctors-container'>
                      {doctors.map((doctor) => (
                        (doctor.city === selectedCity) 
                        && 
                        <>
                          <h2>
                            {
                            createDoctorInfo(
                              doctor.photo, 
                              doctor.name, 
                              doctor.speciality, 
                              <Rating sx={{ fontSize: '20px' }} readOnly value={5} style={{ color: 'var(--main-color)', marginRight: '15px' }} />, 
                              doctor.contactNumber,
                              setCheckCrm,
                              doctor.crm)
                            }
                          </h2>
                          
                          <p className='description'>{doctor.description}</p>
                        </>
                      ))}
                    </div>
                    <div className='map'>
                      <iframe title="Brasil" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31759630.457468405!2d-69.6394808113453!3d-13.663356945500425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1636573725583!5m2!1spt-BR!2sbr" style={{width: '300px', height: '530px', border: '0', allowfullscreen: '', loading: 'lazy'}}></iframe>
                    </div>
                  </div>
                </div>
              )
            )
        :
          (
            <div className='main'>
              <h2 style={{fontFamily: 'roboto'}}>{selectedSpeciality}, {selectedCity}</h2>
              <div className='main-content'>
                <div className='doctors-container'>
                  {doctors.map((doctor) => (
                    (doctor.speciality === selectedSpeciality && doctor.city === selectedCity) 
                    && 
                    <>
                      <h2>
                        {
                        createDoctorInfo(
                          doctor.photo, 
                          doctor.name, 
                          doctor.speciality, 
                          <Rating sx={{ fontSize: '20px' }} readOnly value={5} style={{ color: 'var(--main-color)', marginRight: '15px' }} />, 
                          doctor.contactNumber,
                          setCheckCrm,
                          doctor.crm)
                        }
                      </h2>
                      
                      <p className='description'>{doctor.description}</p>
                    </>
                  ))}
                </div>
                <div className='map'>
                  <iframe title="Brasil" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31759630.457468405!2d-69.6394808113453!3d-13.663356945500425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1636573725583!5m2!1spt-BR!2sbr" style={{width: '300px', height: '530px', border: '0', allowfullscreen: '', loading: 'lazy'}}></iframe>
                </div>
              </div>
            </div> 
          )
      )
    : 
      (
        <div className='main'>
          <div className='main-content'>
            <div className='doctors-container' style={{backgroundColor: 'rgba(227, 227, 227)'}}>
              {doctors.map((doctor) => (
                (doctor.crm === checkCrm) 
                && 
                <>
                  <h2>{doctor.speciality}, {doctor.city}</h2>
                  <h2>
                    {
                    createDoctorInfo(
                      doctor.photo, 
                      doctor.name, 
                      doctor.speciality, 
                      <Rating sx={{ fontSize: '20px' }} readOnly value={5} style={{ color: 'var(--main-color)', marginRight: '15px' }} />, 
                      doctor.contactNumber,
                      setCheckCrm,
                      doctor.crm)
                    }
                  </h2>
                  <h4>CRM: {doctor.crm}</h4>
                  <p className='description'>{doctor.description} <br></br><br></br> {doctor.description}</p>
                  <div className='icon-content'>
                    <div className='iconBox'>
                      <Payment style={{color: 'var(--main-color)'}} fontSize='large'/>
                      <p>Métodos de pagamento</p>
                    </div>
                    <div className='iconBox'>
                      <Security style={{color: 'var(--main-color)'}} fontSize='large'/>
                      <p>Convênios</p>
                    </div>
                    <div className='iconBox'>
                      <Place style={{color: 'var(--main-color)'}} fontSize='large'/>
                      <p>Só atendo no endereço abaixo</p>
                    </div>
                  </div>
                  <h3>Endereço: {doctor.addres}</h3>
                  <div className='place'>
                    <img src={doctor.placeOfService} style={{border: '2px solid black', borderRadius: '5px', width: '80%'}} alt='Imagem do local de trabalho'></img>
                  </div>
                  
                  <div className='action'>
                    <Button variant='contained' style={{padding: '12px 17px', marginRight: '5px'}}>
                      <EventNote style={{marginRight: '5px'}}/>
                      Agendar Consulta
                    </Button>
                    <Button variant='text' style={{padding: '12px 17px', marginLeft: '5px'}}>
                      <Message style={{marginRight: '5px'}}/>
                      Enviar uma Mensagem
                    </Button>
                  </div>
                </>
              ))}
            </div>
            <div className='map'>
              <iframe title="Brasil" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31759630.457468405!2d-69.6394808113453!3d-13.663356945500425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1636573725583!5m2!1spt-BR!2sbr" style={{width: '300px', height: '530px', border: '0', allowfullscreen: '', loading: 'lazy'}}></iframe>
            </div>
          </div>
        </div>
      )
      
    )
  
}

