import React from 'react';
import Kessa from '../../assets/imgs/Kessa.jpeg';
import { Link } from "react-router-dom";


function KessaCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Kessa"><img src={Kessa}/></Link>
            </div>

        </div> 
    );
}

export default KessaCard;