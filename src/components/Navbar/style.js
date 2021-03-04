import styled from 'styled-components'
import {Grid} from '@material-ui/core'
import { Link } from 'react-scroll'

export const Nav = styled(Grid)`
background-color: ${({scrollNav}) => (scrollNav ? 'transparent' : '#000')};
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    height: 80px;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.8s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavLink = styled(Link)`
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        color: #de9e36;
    }
`

export const LinksList = styled.ul`
    position: fixed;
    top: ${({toggleMenu}) => (toggleMenu ? '0' : '-100%')};
    transition: 0.5s all ease-in-out;
    z-index: 6;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0;
    padding: 20px;
    background-color: #424242;
`

export const LinkWrapper = styled.li`
    margin-top: 15px;
    padding-bottom: 10px;
    list-style: none;
`

export const MenuDisplayer = styled(Grid)`
    
`

export const MenuBtn = styled.button`
    color: #FFF;
    cursor: pointer;
    height: 50px;
    width: 80px;
    border: 3px solid #FFF;
    background-color: transparent;
    transition: 0.8s all ease-in-out;


    &:hover {
        transition: 0.8s all ease-in-out;
        border: 3px solid  #de9e36;
    }

    &:focus {
        outline: none;
    }
`

export const  CoverBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${({toggleMenu}) => (toggleMenu ? 'block' : 'none')};
    opacity: ${({toggleMenu}) => (toggleMenu ? '0.5' : '0')};
    background-color: #000;
    transition:  0.8s all ease-in-out;
    z-index: 2;
`