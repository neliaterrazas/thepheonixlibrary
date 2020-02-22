import React from 'react';
import Shanoa from '../../assets/imgs/Shanoa.jpeg';
import { Link } from "react-router-dom";


function ShanoaCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Shanoa"><img src={Shanoa}/></Link>
            </div>

        </div> 
    );
}

export default ShanoaCard;