import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./header.module.scss"

const Header = () => {
    return (
        <div>
        <header className={HeaderStyles.header}>
            <h3 className={HeaderStyles.logoText}>Sebastian<br/>
                Chapman<span className={HeaderStyles.logoAccent}>.</span>blog
            </h3>
            <nav className={HeaderStyles.navClass}>
                <Link to="/" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>Portfolio</Link>
                <Link to="/blog" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>Blog</Link>
            </nav>
        </header>
        </div>
    )
}

export default Header;