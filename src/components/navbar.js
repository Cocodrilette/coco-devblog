import React from "react"
import { Link } from 'gatsby'
import { navbar, navbarItem, navbarLinkText } from '../comp-styles/main-style.module.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarRoutes: [
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" }
            ]
        };
    }
    render() {
        return (
            <nav className={navbar}>
                {this.state.navbarRoutes.map((route, index) => (
                    <li className={navbarItem}>
                        <Link key={index} to={route.path} className={navbarLinkText}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </nav>
        )
    }
}

export default Navbar