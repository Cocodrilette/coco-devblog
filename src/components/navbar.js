import { Link } from 'gatsby'
import React from "react"
import {
    navbarItem,
    navbarItemLink,
    navbarItemsContainer
} from '../../styles/navbar.module.css'
import {
    navbarContainer
} from '../../styles/main.module.css'
import {
    headerContent,
    headerMenu
} from '../../styles/header.module.css'
import { header } from '../../styles/main.module.css'
import { StaticImage } from 'gatsby-plugin-image'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarRoutes: [
                { name: "Home", path: "/" },
                { name: "Posts", path: "/posts" },
                { name: "About", path: "/about" },
                { name: "Resources", path: "/resources" },
            ],
            isOpen: false,
            handleOpenNavbar: () => {
                this.setState({ isOpen: !this.state.isOpen })
            }
        };
        this.navItem = this.state.navbarRoutes.map(function (route, id) {
            return (
                <li key={id} className={navbarItem}>
                    <Link to={route.path} className={navbarItemLink}>
                        {route.name}
                    </Link>
                </li>
            )
        });
    }

    render() {
        return (
            <nav className={navbarContainer}>
                <header className={header}>
                    <div className={headerContent}>
                        <Link to="/" title='Go to home'>
                            /under<span>B</span>
                        </Link>
                        <div
                            className={headerMenu}
                            onClick={this.state.handleOpenNavbar}
                            onKeyDown={this.state.handleOpenNavbar}>
                            {this.state.isOpen ? (
                                <StaticImage
                                src='../images/menu-fill.png'
                                alt='Menu'
                            />
                            ) : (
                                <StaticImage
                                src='../images/menu.png'
                                alt='Menu'
                            />
                            )}
                        </div>
                    </div>
                </header>
                {this.state.isOpen == true && <div className={navbarItemsContainer}>{this.navItem}</div>}
            </nav>
        )
    }
}


export default Navbar


