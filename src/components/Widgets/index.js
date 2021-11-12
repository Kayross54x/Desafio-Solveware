import React from 'react';
import './style.css';
export function widget (img ,title, text) {
    return ( 
        <div className = 'content-widget'>
            <div className='top-side'>
                <div>
                    {img}
                </div>
                <div>
                    <h3>{title}</h3>
                </div>
            </div>
            <p className='bottom-side'>{text}</p>
        </div>
     );
}
 
