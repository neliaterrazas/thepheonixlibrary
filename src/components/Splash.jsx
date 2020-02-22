import React from 'react';
import temporary from '../assets/imgs/temporary.png';
import AshleyCard from './mujeres files/AshleyCard';
import CrystalCard from './mujeres files/CrystalCard';
import EbonyCard from './mujeres files/EbonyCard';
import JessicaCard from './mujeres files/JessicaCard';
import KessaCard from './mujeres files/KessaCard';
import LeanetteCard from './mujeres files/LeanetteCard';
import NovaCard from './mujeres files/NovaCard';
import ShanoaCard from './mujeres files/ShanoaCard';
import SonyaCard from './mujeres files/SonyaCard';

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
            <CrystalCard/>
            <EbonyCard/>
            <JessicaCard/>
            <KessaCard/>
            <LeanetteCard/>
            <NovaCard/>
            <ShanoaCard/>
            <SonyaCard/>
        </div>
    );
}

export default Splash;