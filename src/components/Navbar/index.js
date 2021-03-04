import React, { useState, useEffect } from 'react'
import './style.css'
import {
    Nav, NavLink,
    LinksList,
    LinkWrapper,
    MenuDisplayer,
    MenuBtn,
    CoverBackground
} from './style'

const Navbar = () => {

    const [scrollNav, setScrollNav] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);

    const changeNav = () => {
        console.log(window.scrollY)
        if (window.scrollY === 0) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);


    /* Liens du menu */
    const links = [
        {
            id: 'home',
            label: 'Acceuil',
        },
        {
            id: 'experience-1',
            label: 'Experience',
        },
        {
            id: 'about',
            label: 'A propos',
        },
        {
            id: 'activity',
            label: 'Mon activité',
        },
        {
            id: 'skills',
            label: 'Mes compétences',
        },
        {
            id: 'contact',
            label: 'Contact',
        }
    ]


    return (
        <Nav scrollnav={scrollNav} container>
            <MenuDisplayer>
                <MenuBtn onClick={() => setToggleMenu(!toggleMenu)}>MENU</MenuBtn>
            </MenuDisplayer>
            <LinksList toggleMenu={toggleMenu} >
                {links.map((link, index) => {
                    const { id, label } = link
                    return (
                        <LinkWrapper key={index}>
                            <NavLink onClick={() => setToggleMenu(!toggleMenu)} to={id} spy={true} smooth={true} offset={-80} duration={500}>{label}</NavLink>
                        </LinkWrapper>
                    )
                })}
            </LinksList>
            <CoverBackground onClick={() => setToggleMenu(!toggleMenu)} toggleMenu={toggleMenu}/>
        </Nav>
    )
}

export default Navbar
