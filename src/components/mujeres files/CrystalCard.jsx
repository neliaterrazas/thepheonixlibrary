import React from 'react';
import Crystal from '../../assets/imgs/Crystal.jpeg';
import { Link } from "react-router-dom";


function CrystalCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Crystal"><img src={Crystal}/></Link>
            </div>

        </div> 
    );
}

export default CrystalCard;