import React from 'react';
import Ashley from '../../assets/imgs/Ashley.jpeg';
import { Link } from "react-router-dom";


function AshleyCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Ashley"><img src={Ashley}/></Link>
            </div>

        </div> 
    );
}

export default AshleyCard;