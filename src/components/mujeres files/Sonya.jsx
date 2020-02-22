import React from 'react';
import foto from '../../assets/imgs/Sonya.jpeg';

function Sonya() {
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

export default Sonya;