import React from 'react';
import foto from '../../assets/imgs/Crystal.jpeg';

function Crystal() {
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

export default Crystal;