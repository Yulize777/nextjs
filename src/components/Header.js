import React from 'react';
import Link from 'next/link'
import {SiBurgerking} from 'react-icons/si'
const Header = () => {
    return (
        <header>
            <div>
                <SiBurgerking  />
            </div>
            <nav>
                <Link legacyBehavior href='/'>
                    <a>main</a>
                </Link>
                <Link legacyBehavior href='/About'>
                    <a>about</a>
                </Link>

                <Link legacyBehavior href='/burgers'>
                    <a>burgers</a>
                </Link>
                <Link legacyBehavior href='/Review'>
                    <a>reviews</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;