import React from 'react';
import CurrentDate from '../CurrentDate';

function Header() {
    return (
        <header className="flex night-bg-desktop text-white text-center text-md">
            <h1 className="pl-14 py-14 uppercase text-xl sm:py-12 sm:text-2xl sm:pl-96">t o d o</h1>
            <div className="pr-14 py-14 ml-auto sm:py-12 sm:pr-96">
                <CurrentDate className="py-12 pr-96 ml-auto"/>
            </div>
        </header>

        
    )
}





export default Header;