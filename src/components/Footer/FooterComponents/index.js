import React from 'react';
export function FooterBoxes(title, text, sideimage) { //SIDEIMAGE É PRA COLOCAR UM TEXTO QUANDO TIVER IMAGEM. Foi uma maneira que eu pensei para conseguir padronizar todo o footer.
    //NAS TAGS QUE EU USAR UM VALOR QUE CHEGA DA FUNÇÃO, EU NÃO CONSIGO FAZER O CSS LÁ NO STYLES.CSS, POR ISSO TENHO QUE FAZER AQUI :/
    //if ternário: !!sideimage ? sideimage : null        ? -> se for true, faça       : -> se for false, faça
    //if ternário só pra true: !!sideimage && ...        && -> se for true, faça
    return ( 
        <div className = 'content-footer-box'>
            <div className='top-side-footer'>
                <div style={{margin: '0px 0px 10px 0px', fontWeight: 'normal', color: '#627282', fontSize: '16px', fontFamily: 'roboto', display:'flex', alignItems:'center'}}>
                    {title} 
                    {!!sideimage && (<h4 style={{margin: '0px 0px 0px 5px', color: 'var(--main-color)', fontSize: '27px'}}>{sideimage}</h4>) } 
                
                
                </div>
                {text.map((text) => {
                    return(
                        <p key={text} style={{margin:'5px 0px 5px 0px', opacity: '0.9', fontSize: '14px', textAlign:'start', color:'#A5A1AB', fontFamily:'roboto'}}>
                            {text}
                        </p>
                    )
                })}
                
            </div>
            
        </div>
    );
}
 

