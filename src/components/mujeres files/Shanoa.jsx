import React from 'react';
import foto from '../../assets/imgs/Shanoa.jpeg';

function Shanoa() {
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

export default Shanoa;