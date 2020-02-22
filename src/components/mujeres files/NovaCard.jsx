import React from 'react';
import Nova from '../../assets/imgs/Nova.jpeg';
import { Link } from "react-router-dom";


function NovaCard() {
    return (
        <div>
            <style jsx>{`
                img {
                    width: 100%;
                }
            `}

            </style>
            <div>
               <Link to="/Nova"><img src={Nova}/></Link>
            </div>

        </div> 
    );
}

export default NovaCard;