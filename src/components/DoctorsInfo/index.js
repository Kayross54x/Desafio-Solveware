import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

export function createDoctorInfo(avatar, name, description, rating, author, setCheckCrm, crm) {
    return (  
        <div className='media'>

            <div className='avatar-div'>
                <img src={avatar} alt='Avatar'/>
            </div>

            <div className='content-div'>
                <div className='name-rating'>
                    <Link to='/doctors' className='doctor-name' onClick={() => {setCheckCrm(crm)}}>{name}</Link>
                    <div className='doctor-rating'>
                        {!!rating ? rating : null}
                    </div>
                </div>
                <p>{description}</p>
                {!!author ? (<p style={{fontSize:'14px', paddingTop:'10px', fontWeight:'lighter', color:'rgba(0,0,0,0.7)'}}>{author}</p>) : null}
            </div>

        </div>
    );
}
 