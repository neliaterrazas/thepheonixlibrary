import React from 'react';
import temporary from '../assets/imgs/temporary.png'

function Splash(){
    return (
        <div className="parent">
            <style jsx>{`
                 .parent {
                    display: flex;
                            
                }

            .temporary img {
                    width: 50%;
                    padding: 25%;
            }

            `}</style>
            <div className="temporary">
                <img src={temporary}/>
            </div>
        </div>
    );
}

export default Splash;