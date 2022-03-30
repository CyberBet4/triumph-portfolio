import React from 'react'
import SvgLines from 'react-mt-svg-lines'; 
import 'animate.css'

const Navigation = () => {

    

  return (
    <div className='container-fluid'>
        <div className="container">
        <div className="d-flex" style={{justifyContent : 'space-between', alignItems : 'center'}}>
            <div className="d-flex" style={{justifyContent : 'space-between'}}>
                <div className="left-links">
                <ul className="d-flex" style={{listStyle : 'none', marginBottom : -10, alignItems : 'center'}}>
                    <li className="nav-item animate__animated animate__fadeIn animate__delay-1s active mr-3">
                        <a className="nav-link" href="#">My Works</a>
                    </li>
                    
                    <SvgLines className='mr-3' animate={ 500 } duration={ 500 }>
                    <svg width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V108" stroke="black" stroke-width="2"/>
                    </svg>

                    </SvgLines>
                    
                    <li className="nav-item mr-3 animate__animated animate__fadeIn animate__delay-1s">
                        <a className="nav-link" href="#">Contact Me</a>
                    </li>
                </ul>
                
                </div>
            </div>
            <h5 style={{marginBottom : 0}} className='animate__animated animate__fadeIn animate__delay-1s'> Triumph's Portfolio Site</h5>
            <div className="d-flex" style={{justifyContent : 'space-between'}}>
                <div className="left-links">
                <ul className="d-flex" style={{listStyle : 'none', marginBottom : -10, alignItems : 'center'}}>
                    <li className="nav-item mr-3 animate__animated animate__fadeIn animate__delay-1s">
                        <a className="nav-link" href="#">Certifications</a>
                    </li>
                    
                    <SvgLines className='mr-3' animate={ 500 } duration={ 500 }>
                    <svg width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V108" stroke="black" stroke-width="2"/>
                    </svg>

                    </SvgLines>
                    
                    <li className="nav-item mr-3 animate__animated animate__fadeIn animate__delay-1s">
                        <a className="nav-link" href="#">My Skills</a>
                    </li>
                </ul>
                
                </div>
            </div>
            </div>
        </div>
        <div className='horiz-line'>
        <SvgLines animate={ true } duration={ 1000 } timing={ 'ease-in-out' }>
            {/* horizontal line */}

            {/* <svg width="5654" height="2" viewBox="0 0 5654 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5654 1H0" stroke="black" stroke-width="2"/>
            </svg> */}

            <svg width="1279" height="2" viewBox="0% 0 1279 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1280 2H0" stroke="black" stroke-width="3" lengthAdjust="spacing"/>
</svg>



        </SvgLines>
        </div>
    </div>
  )
}

export default Navigation