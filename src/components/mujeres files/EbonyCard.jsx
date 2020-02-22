import React from 'react';
import Ebony from '../../assets/imgs/Ebony.jpeg';
import { Link } from "react-router-dom";


function EbonyCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Ebony"><img src={Ebony}/></Link>
            </div>

        </div> 
    );
}

export default EbonyCard;