import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {
    SkillWrapper,
    SkillLabel,
    SkillLevel
} from './style'

export const SkillItem = ({ label, level }) => {
    return (
        <SkillWrapper>
            <SkillLabel>
                {label}
            </SkillLabel>
            <SkillLevel>
                <LevelGenerator level={level}/>
            </SkillLevel>
        </SkillWrapper>
    )
}


const LevelGenerator = ({ level }) => {
    return (
        <>
            {
                [...Array(5).keys()].map((x) => {

                    return (
                        (x + 1) <= level ?
                            <StarIcon key={x} color='inherit'/> :
                            ((x + 0.5) <= level ?
                                <StarHalfIcon key={x} color='inherit' /> :
                                <StarBorderIcon key={x} color='disabled'/>))
                }
                )
            }
        </>
    )
}
