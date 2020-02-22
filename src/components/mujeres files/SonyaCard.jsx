import React from 'react';
import Sonya from '../../assets/imgs/Sonya.jpeg';
import { Link } from "react-router-dom";


function SonyaCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Sonya"><img src={Sonya}/></Link>
            </div>

        </div> 
    );
}

export default SonyaCard;