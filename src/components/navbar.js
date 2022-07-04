import React from "react"
import { Link } from 'gatsby'
import { navbar, navbarItem, navbarLinkText } from '../comp-styles/main-style.module.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarRoutes: [
                { name: "Home", path: "/" },
                { name: "Posts", path: "/posts" },
                { name: "About", path: "/about" }
            ],
        };
        this.navItem = this.state.navbarRoutes.map(function (route, index) {
            return (
                <li className={navbarItem}>
                    <Link key={index} to={route.path} className={navbarLinkText}>
                        {route.name}
                    </Link>
                </li>
            )
        });
    }

    render() {
        return (
            <nav className={navbar}>
                {this.navItem}
            </nav>
        )
    }
}

export default Navbar