import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const SkillsSection = styled.section`
    height: fit-content;
    min-height: 100vh;
`
export const SkillsWrapper = styled(Grid)`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
`

export const SkillWrapper = styled.div`

`

export const BlockSkills = styled(Grid)`
`

export const BlockTitle = styled.h5`
    font-size: 2.5rem;
`

export const SkillLabel = styled.p`
    font-size: 1.5rem;
`

export const SkillLevel = styled.div`
    color: orange;
`
