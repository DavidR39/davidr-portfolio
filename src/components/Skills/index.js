import {  Typography } from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import React from 'react'
import { SkillItem } from './SkillItem'
import {
    SkillsSection,
    SkillsWrapper,
    BlockSkills,
    BlockTitle,
} from './style'

const Skills = () => {
    return (
        <SkillsSection id='skills'>
            <Typography variant='h3' darkColor={true} underlineDark={true}>Compétences</Typography>
            <SkillsWrapper container>
                <Fade top duration={1000} delay={800} distance="30px">
                    <BlockSkills item>
                        <BlockTitle>Back-End</BlockTitle>
                        <SkillItem label='E-commerce | Commerce.js' level={4.5} />
                        <SkillItem label='MERN Database | MongoDB' level={4} />
                        <SkillItem label='MERN Server | Express.js' level={4} />
                        <SkillItem label='MERN Server | Node.js' level={4} />
                    </BlockSkills>
                </Fade>
                <Fade top duration={1000} delay={1000} distance="30px">
                    <BlockSkills item>
                        <BlockTitle>Front-End</BlockTitle>
                        <SkillItem label='React.js' level={4.5} />
                        <SkillItem label='Appel API | Redux' level={4.5} />
                        <SkillItem label='CSS | SCSS' level={4} />
                        <SkillItem label='Design | Adobe Illustrator' level={2.5} />
                    </BlockSkills>
                </Fade>
                <Fade top duration={1000} delay={1200} distance="30px">
                    <BlockSkills item>
                        <BlockTitle>Autre</BlockTitle>
                        <SkillItem label='Gestion de projet | En cascade' level={3.5} />
                        <SkillItem label='API | Postman & Insomnia' level={4.5} />
                        <SkillItem label='Anglais | Parlé' level={3} />
                        <SkillItem label='Anglais | Compréhension' level={4} />
                    </BlockSkills>
                </Fade>
            </SkillsWrapper>
        </SkillsSection>
    )
}

export default Skills
