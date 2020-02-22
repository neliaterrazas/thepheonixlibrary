import React from 'react';
import foto from '../../assets/imgs/Ebony.jpeg';

function Ebony() {
    return (
        <div>
            <style jsx>{`
            img {
                width: 50%;
            }
            `}

            </style>
            <div>
                <img src={foto}/>
            </div>

        </div>

    );
}

export default Ebony;