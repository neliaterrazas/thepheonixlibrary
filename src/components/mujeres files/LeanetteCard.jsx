import React from 'react';
import Leanette from '../../assets/imgs/Leanette.jpeg';
import { Link } from "react-router-dom";


function LeanetteCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Leanette"><img src={Leanette}/></Link>
            </div>

        </div> 
    );
}

export default LeanetteCard;