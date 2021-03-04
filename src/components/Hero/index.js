import React from 'react'
import {
    Grid, Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll'
import './style.css'

const Hero = () => {
    return (
        <Grid className='hero-container' container id='home'>
            <Grid item className='hero-text'>

                <div className='avatar'>
                    <img src='./images/face_co.png' alt='avatar' />
                </div>
                <div className='text-block'>
                    <Typography fontColor='primary' variant='h1' > David Rollier </Typography>
                    <Typography variant='h2' > #Digital Engineer #Freelance</Typography>
                    <Typography variant='h2' >#Full Stack Developer </Typography>
                </div>
                <Link className='scroll-link' to='experience-1' spy={true} smooth={true} offset={-80} duration={500}>
                    <ExpandMoreIcon />
                </Link>
            </Grid>

        </Grid>
    )
}

export default Hero
