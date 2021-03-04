import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import BuildIcon from '@material-ui/icons/Build';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Fade from 'react-reveal'
import {
    ActivitySection,
    ActivitiesWrapper,
    ActivityItem,
    ActivityTitle,
    ActivityIcon,
    ActivityText,
    ActivityTextSubtitle
} from './style'
const Activity = () => {
    return (
        <ActivitySection id="activity">
            <Typography variant='h3' darkColor={true} underlineDark={true}>Mon Activité</Typography>
            <ActivitiesWrapper container justify='center' alignItems='center'>
                <Fade right duration={1000} delay={800} distance="30px">
                    <Grid item>
                        <ActivityItem>
                            <ActivityTitle>Full Stack Developer</ActivityTitle>
                            <ActivityIcon>
                                <DeveloperModeIcon fontSize='inherit' />
                            </ActivityIcon>
                            <ActivityText>
                                <ActivityTextSubtitle> Description </ActivityTextSubtitle>
                                <span>Mon activité est le développement d'application Web.

                            </span>
                                <span> Pour cela je travaille principalement avec le Framework Javascript React.js qui est l'un des plus populaires de nos jours. </span>
                                <span>
                                    Concernant la conception d'application Web spécifique en Full Stack j'utilise une structure de type MERN (MondoDB, Express.js, React.js, Node,js). </span>
                                <span>
                                    Enfin, pour la conception de boutique E-commerce j'utilise React.js pour le Front-End et <a href="https://commercejs.com/" target="blank" style={{ color: 'white' }}>Commerce.js</a> pour la partie Back-End.
                            </span>
                            </ActivityText>
                        </ActivityItem>
                    </Grid>
                </Fade>
                <Fade right duration={1000} delay={1000} distance="30px">
                    <Grid item>
                        <ActivityItem>
                            <ActivityTitle>Web<br /> Maintenance</ActivityTitle>
                            <ActivityIcon>
                                <BuildIcon fontSize='inherit' />
                            </ActivityIcon>
                            <ActivityText>
                                <ActivityTextSubtitle> Description </ActivityTextSubtitle>
                            Mon activité ne se restreint pas au développement d'une solution entière. Elle s'étend aussi à la maintenance de solution ou site Web déjà existant.
                            <br></br>
                                <br></br>
                            Je propose mes services pour la correction de bug, l'intégration de nouveaux contenus ou l'évolution applicative.
                        </ActivityText>
                        </ActivityItem>
                    </Grid>
                </Fade>
                <Fade right duration={1000} delay={1200} distance="30px">
                    <Grid item>
                        <ActivityItem>
                            <ActivityTitle>Coming <br /> Soon</ActivityTitle>
                            <ActivityIcon>
                                <PhoneIphoneIcon fontSize='inherit' />
                            </ActivityIcon>
                            <ActivityText >
                                <ActivityTextSubtitle> Description </ActivityTextSubtitle>
                            Je me forme actuellement à React Native afin de développer des applications sur Android et iOs.
                        </ActivityText>
                        </ActivityItem>
                    </Grid>
                </Fade>
            </ActivitiesWrapper>
        </ActivitySection>
    )
}

export default Activity
