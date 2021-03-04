import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const ContactSection = styled.section`
    background-color: #DE9E36;
    background-image: linear-gradient(135deg,#DE9E36,#F7C16A);
    height: fit-content;
    
    padding-top: 10%;
    padding-bottom: 50px;



    @media screen and (min-width: 735px){
        clip-path: polygon(100% 0, 100% 10%, 100% 100%, 0 100%, 0 10%); 
        /* grid-template-columns: 1fr; */
    }
`

export const ContactBlock = styled(Grid)`
    position: relative; 
    justify-content: space-around;
    align-items: flex-end;

    @media screen and (max-width: 746px){
        /* grid-template-columns: 1fr; */
        flex-direction: column-reverse;
        align-items: center;
    }

`

export const ContactBlockForm = styled(Grid)`
    display: block;
    max-width: 500px;
    min-width: 310px;
    min-height: 610px;
    margin: auto;
    background-color: #37323E;
    padding: 20px;

    @media screen and (max-width: 746px){
        margin-top: 50px !important;
    }

`

export const ContactBlockText = styled(Grid)`
    position: relative;
    width: 430px;
    padding-top: 150px;

    @media screen and (max-width: 746px){
        width: 100vw;
        max-width: 430px;
        padding-top: 200px;
    }
    /* min-width: 300px;
    width: 500px;
    height: 150px;
    background-image: linear-gradient(0,#37323E,#37323E);
    clip-path:  polygon(0% 0%, 100% 0%, 100% 83%, 37% 83%, 27% 100%, 26% 83%, 0 83%);
    border-radius: 0;
    //opacity: 0.2;
    padding: 15px; 
    padding-bottom: 130px !important; */
`
export const ContactText = styled.p`
   position: absolute;
   top: -15px;
   right: 15%;
   width: 300px;
   color: #fff;
   padding: 20px;
   padding-bottom: 70px;
   background-image: linear-gradient(0,#37323E,#37323E);
   clip-path: polygon(0% 0%, 100% 0%, 100% 83%, 25% 84%, 27% 100%, 12% 83%, 0 83%);
    

    @media screen and (max-width: 746px){
        width: 90%;
        max-width: 300px;
        right: 0;
    }
    /* color: #FFF;
    font-size: 1.1rem;
    word-wrap: break-word; */
`


export const SocialBlock = styled(Grid)`
    
`

export const SocialItem = styled(Grid)`
    margin: 10px;
`

export const SocialTitle = styled.h1`
    text-align: center;
    margin-top: 50px;
`

export const Credits = styled.p`
text-align: center;

    &::before {
        display: block;
        content: '';
        height: 1px;
        width: 90%;
        max-width: 500px;
        background-color: #000;
        opacity: 0.2;
        margin: 20px auto;

    }
`