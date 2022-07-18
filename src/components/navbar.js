import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import React from "react"
import { 
    navbarItem, 
    navbarBrand, 
    navbarItemLink,
    navbarItemsContainer
} from '../../styles/navbar.module.css'
import {
    navbarContainer
} from '../../styles/main.module.css'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarRoutes: [
                { name: "Home", path: "/"},
                { name: "Posts", path: "/posts" },
                { name: "About", path: "/about" },
                { name: "Resources", path: "/resources"},
            ],
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
            <div className={navbarBrand}>under<span>B</span></div>
            <div className={navbarItemsContainer}>{this.navItem}</div>
            </nav>
        )
    }
}

export default Navbar


