import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    FooterLinksWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    WebSiteRights
} from './FooterElements'
import { FaFacebook } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

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
            id: 'services',
            label: 'Mes services',
        },
        {
            id: 'contact',
            label: 'Contact',
        }
    ]

return (
    <FooterContainer id="footer">
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle >Stampy</FooterLinkTitle>
                        {
                            links.map((link) => {
                                const { id, label } = link;

                                return (
                                    <FooterLink key={id} to='/'>{label}</FooterLink>
                                );
                            })
                        }
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        stampy
                        </SocialLogo>
                    <WebSiteRights>
                        stampy © {new Date().getFullYear()}
                            All rights reserved.
                        </WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
)
}

export default Footer
