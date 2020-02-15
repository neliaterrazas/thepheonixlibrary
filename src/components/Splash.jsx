import React from 'react';
import temporary from '../assets/imgs/temporary.png'

function Splash(){
    return (
        <div className="parent">
            <style jsx>{`
            .temporary {
                justify-content: center;
            }
                .temporary img {
                    width: 50%;
            }
            .parent {
                display: flex;
                
            }
            `}</style>
            <div className="temporary">
            <img src={temporary}/>
            </div>
        </div>
    );
}

export default Splash;