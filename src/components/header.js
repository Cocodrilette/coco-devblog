import React from 'react'
import { Link } from 'gatsby'
import { headerContent } from '../../styles/header.module.css'
import { header } from '../../styles/main.module.css'

function Header() {

    return (
        <header className={header}>
            <div className={headerContent}>
                <Link to="/" title='Go to home'>
                    /home
                </Link>
            </div>
        </header>
    )
}


export default Header