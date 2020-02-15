import React from 'react';
import Links from './Links';



function Header() {
    return (
        <div className="header">
            <style jsx>{`
            .header {
                border: 2px solid red;
            }`

            }</style>
            <Links/>
        </div>
    );
}

export default Header;