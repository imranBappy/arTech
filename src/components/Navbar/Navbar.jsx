import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import menu from '../../assets/MENU.svg'

import styles from './Navbar.module.css'
import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navbar__wrapper}`}>
                <div className={styles.logo__wrapper}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={`${styles.nav__wrapper}`} >
                    <li>
                        <NavLink className={`text_white ${styles.navlink}`} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text_white ${styles.navlink}`} to="/">Key Features</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text_white ${styles.navlink}`} to="/">Pre-NFT Rights</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text_white ${styles.navlink}`} to="/">Marketplace</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text_white ${styles.navlink}`} to="/">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={`text_white ${styles.navlink} ${styles.signup__btn}`} to="/">Sing Up</NavLink>
                    </li>
                </ul>
                <div className={styles.menu__container}>
                    <img className={styles.menu_icon} onClick={() => setOpen(!open)} src={menu} alt="Menu" />
                </div>
            </div>
            <ul className={`${styles.menu__nav__wrapper} ${open ? styles.menu__nav__wrapper__active : ""}`} >
                <li>
                    <NavLink className={`text_white ${styles.navlink}`} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={`text_white ${styles.navlink}`} to="/">Key Features</NavLink>
                </li>
                <li>
                    <NavLink className={`text_white ${styles.navlink}`} to="/">Pre-NFT Rights</NavLink>
                </li>
                <li>
                    <NavLink className={`text_white ${styles.navlink}`} to="/">Marketplace</NavLink>
                </li>
                <li>
                    <NavLink className={`text_white ${styles.navlink}`} to="/">Login</NavLink>
                </li>
                <li>
                    <NavLink className={`text_white ${styles.navlink} ${styles.signup__btn}`} to="/">Sing Up</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;