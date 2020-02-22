import React from 'react';
import Jessica from '../../assets/imgs/Jessica.jpeg';
import { Link } from "react-router-dom";


function JessicaCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Jessica"><img src={Jessica}/></Link>
            </div>

        </div> 
    );
}

export default JessicaCard;