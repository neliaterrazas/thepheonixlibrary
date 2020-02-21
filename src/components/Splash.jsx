import React from 'react';
import temporary from '../assets/imgs/temporary.png';
import AshleyCard from './mujeres files/AshleyCard';

function Splash(){
    return (
        <div>
            <style jsx>{`
            img {
                width: 100%;
            }
            `}</style>
            <div>
                <img src={temporary}/>
            </div>
            <AshleyCard/>
        </div>
    );
}

export default Splash;